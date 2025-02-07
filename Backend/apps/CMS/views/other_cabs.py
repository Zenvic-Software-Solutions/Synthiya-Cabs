from apps.CMS.serializers import OtherCabListSerializer, OtherCabWriteSerializer
from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import OtherCab

class OtherCabsListViewSet(AppListAPIViewSet):
    search_fields = []
    filterset_fields = []

    queryset = OtherCab.objects.all().order_by("-created_by")
    serializer_class = OtherCabListSerializer
    column_details = {
        "identity":"Cab Name",
        "owner_name":"Owner Name",
        "phone_number":"Phone Number",
        "address":"Address",
        "balance":"Balance",
    }
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns" : self.get_table_columns_details(),
            "filters" : self.get_table_filter_details(),
            "filter_data": {}
        }
        return data
    

class OtherCabsCUDViewSet(AppCUDAPIViewSet):
    queryset = OtherCab.objects.all()
    serializer_class = OtherCabListSerializer