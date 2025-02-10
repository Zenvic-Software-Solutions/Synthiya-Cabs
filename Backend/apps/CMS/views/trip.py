from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import Trip,Vechile
from apps.CMS.serializers import TripReadSerializer,TripWriteSerializer
from apps.ACCESS.models import Customer

class TripListAPIView(AppListAPIViewSet):
    search_fields = ["customer__identity"]
    filterset_fields = {
        "start_date":["gte","lte"],
        "end_date":["gte","lte"]
    }
    queryset = Trip.objects.all()
    serializer_class = TripReadSerializer
    column_details = {
        "customer_details.identity":"Customer Name",
        "vechile_details.identity":"Vehicle Name",
        "vechile_details.vechile_no":"Vechile No",
        "start_date":"Start Date",
        "end_date":"End Date",
        "start_km":"Start Km",
        "end_km":"End Km"
    }

    filter_details={
        "start_date":"Start Date",
        "end_date":"End Date",

    }


    def get_table_meta(self):
        data ={
            "columns":self.column_details,
            "filters":self.filter_details,
            "filter_data":{
                "customer":self.serialize_for_filter(Customer.objects.all()),
                "vechile":self.serialize_for_filter(Vechile.objects.all())
            }
        }

class TripCUDAPIView(AppCUDAPIViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripWriteSerializer
    