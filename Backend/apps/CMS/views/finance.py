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
    FinanceHistoryReadSerializer
)
from rest_framework.generics import RetrieveAPIView

class TripListAPIView(AppListAPIViewSet):
    search_fields = ["vehicle","finance_name","contact_number","total_amount","initiated_date"]
    filterset_fields = {"start_date": ["gte", "lte"], "end_date": ["gte", "lte"], "vehicle":["exact"]}
    queryset = Finance.objects.all()
    serializer_class = FinanceReadSerializer
    column_details = {
        "vehicle_details.vehicle_no": "Vehicle No",
        "finance_name": "Finanace Name",
        "due_amount": "Due Amount",
        "due_date": "Due Date",
        
    }

    filter_details = {
        "start_date": "Start Date",
        "end_date": "End Date",
        "vehcle":"Vehcle"
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