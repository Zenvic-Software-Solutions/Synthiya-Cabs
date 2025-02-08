from apps.CMS.serializers import VechileReadSerializer, VechileWriteSerializer
from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import Vechile

class VechileListViewSet(AppListAPIViewSet):
    search_fields=[]
    filterset_fields=[]

    queryset = Vechile.objects.all()
    serializer_class = VechileReadSerializer

    column_details={
        "identity":"Vechile Name",
        "vechile_type":"Vechile Type",
        "vechile_no": "Vechile No",
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
    
class VechileCUDViewSet(AppCUDAPIViewSet):

    queryset = Vechile.objects.all()
    serializer_class = VechileWriteSerializer
