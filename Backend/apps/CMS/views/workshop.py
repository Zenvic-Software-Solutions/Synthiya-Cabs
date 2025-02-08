from apps.CMS.models import Workshop
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet
from apps.CMS.serializers import WorkshopReadSerializer, WorkshopWriteSerializer


class WorkshopListViewSet(AppListAPIViewSet):
    search_fields=[]
    filterset_fields=[]

    queryset = Workshop.objects.all()
    serializer_class = WorkshopWriteSerializer

    column_details = {}
    filter_details = {}

    def get_table_meta(self):

        data = {
            "column":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{}  
        }
        return data


class WorkshopCUDViewSet(AppCUDAPIViewSet):

    queryset = Workshop.objects.all()
    serializer_class = WorkshopWriteSerializer