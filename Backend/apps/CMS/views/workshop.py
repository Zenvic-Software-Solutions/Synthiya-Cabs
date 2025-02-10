from apps.CMS.models import Workshop, Maintenance
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet
from apps.CMS.serializers import WorkshopReadSerializer, WorkshopWriteSerializer, MaintenanceReadSerializer, MaintenanceWriteSerializer


class WorkshopListViewSet(AppListAPIViewSet):
    search_fields=["identity", "phone", "address", "owner_name"]
    filterset_fields=[]

    queryset = Workshop.objects.all()
    serializer_class = WorkshopReadSerializer

    column_details = {
        "identity":"Workshop Name",
        "owner_name":"Owner Name",
        "phone":"Phone Number",
        "address":"Address",
        "balance":"Balance",
    }
    filter_details = {}

    def get_table_meta(self):

        data = {
            "columns":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{}  
        }
        return data


class WorkshopCUDViewSet(AppCUDAPIViewSet):

    queryset = Workshop.objects.all()
    serializer_class = WorkshopWriteSerializer


class MaintenanceListViewSet(AppListAPIViewSet):
    search_fields=["identity", "phone", "address", "owner_name"]
    filterset_fields=[]

    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceReadSerializer

    column_details = {
        "workshop_details.identity":"Workshop Name",
        "vehicle_details.identiy":"vehicle Name",
        "driver_details.user.phone_number":"Phone Number",
        "start_date":"Start Date",
        "end_date":"End Date",
        "start_km":"Start KM",
        "end_km":"End KM",
        "status":"Status",
    }
    filter_details = {}

    def get_table_meta(self):

        data = {
            "columns":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{}  
        }
        return data
    

class MaintenanceCUDViewSet(AppCUDAPIViewSet):

    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceWriteSerializer