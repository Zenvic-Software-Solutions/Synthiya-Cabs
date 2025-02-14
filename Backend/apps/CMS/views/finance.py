from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.models import Vehicle
from apps.CMS.models import Finance,FinanceHistory
from apps.CMS.serializers import (
    FinanceReadSerializer,
    FinanceHistoryReadSerializer,
    FinanceHistoryWriteSerializer,
    FinanceWriteSerializer,
)
from rest_framework.generics import RetrieveAPIView

class FinanaceListAPIView(AppListAPIViewSet):
    search_fields = ["vehicle__identity","finance_name","contact_number","total_amount","initiated_date"]
    filterset_fields = {
        "vehicle__vehicle_no":["exact"],
        "due_date":["gte","lte"],
        "due_amount":["gte","lte"],
        "total_amount":["gte","lte"]}
    queryset = Finance.objects.all()
    serializer_class = FinanceReadSerializer
    column_details = {
        "vehicle_details.identity":"Vehicle Name",
        "vehicle_details.vehicle_no": "Vehicle No",
        "finance_name": "Finanace Name",
        "due_amount": "Due Amount",
        "due_date": "Due Date",
        
    }

    filter_details = {
        "due_amounnt":"Due Amount",
        "due_date":"Due Date",
        "total_amount":"Total Amount"
    }

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {
                "vehicle": self.serialize_for_filter(Vehicle.objects.all()),
            },
        }
        return data
    
class FinanceCUDAPIView(AppCUDAPIViewSet):
    queryset =Finance.objects.all()
    serializer_class =FinanceWriteSerializer


class FinanceDetailAPIView(AbstractLookUpFieldMixin,AppAPIView,RetrieveAPIView):
    queryset =Finance.objects.all()
    serializer_class = FinanceReadSerializer

class VehicleFinanceAPIView(AppListAPIViewSet):
    serializer_class =FinanceReadSerializer
    def get_queryset(self):
        uuid= self.kwargs.get("uuid")
        vehicle=Vehicle.objects.get(uuid=uuid)
        queryset= Finance.objects.filter(vehicle=vehicle)
        return queryset
    
    
    
class FinanaceHistoryListAPIView(AppListAPIViewSet):
    search_fields = ["finance__finance_name",]
    filterset_fields = {
        "finance__finance_name":["exact"],
        "amount":["gte","lte"],
        "paid_date":["gte","lte"]
    }
    queryset = FinanceHistory.objects.all()
    serializer_class = FinanceHistoryReadSerializer
    column_details = {
    
        "finance_details.finance_name": "Finanace Name",
        "amount": "Amount",
        "paid_date": "Paid Date",
        
    }

    filter_details = {
        
        "finance__finance_name":"Finance Name",
        "amount":":Amount",
        "paid_date":"Paid Date"
    }

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {
                "finance": self.serialize_for_filter(Finance.objects.all(),fields=["finance_name"]),
            },
        }
        return data
    



class FinanceHistoryCUDAPIView(AppCUDAPIViewSet):
    queryset = FinanceHistory.objects.all()
    serializer_class = FinanceHistoryWriteSerializer


class FinanceHistoryDetailAPIView(AbstractLookUpFieldMixin,AppAPIView,RetrieveAPIView):
    queryset =FinanceHistory.objects.all()
    serializer_class = FinanceHistoryReadSerializer