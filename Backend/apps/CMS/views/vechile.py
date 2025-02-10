from apps.CMS.serializers import VehicleReadSerializer, VehicleWriteSerializer
from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import Vehicle

class VehicleListViewSet(AppListAPIViewSet):
    search_fields=[]
    filterset_fields=[]

    queryset = Vehicle.objects.all()
    serializer_class = VehicleReadSerializer

    column_details={
        "identity":"Vehicle Name",
        "vehicle_type":"Vehicle Type",
        "vehicle_no": "Vehicle No",
        "is_ac_available":"AC Availability",
        "last_km":"last KM",
    }
    filter_details={}
    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            data:{

            }
        }
        return data
    
class VehicleCUDViewSet(AppCUDAPIViewSet):

    queryset = Vehicle.objects.all()
    serializer_class = VehicleWriteSerializer
