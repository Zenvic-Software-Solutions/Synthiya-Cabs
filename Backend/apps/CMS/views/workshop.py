from HELPERS.choices import MAINTENANCE_STATUS_CHOICES
from apps.ACCESS.models import Driver
from apps.CMS.models import Workshop, Maintenance, Vehicle
from apps.BASE.views import (
    AppListAPIViewSet,
    AppCUDAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.serializers import (
    WorkshopReadSerializer,
    WorkshopWriteSerializer,
    MaintenanceReadSerializer,
    MaintenanceWriteSerializer,
    WorkshopDetailSerializer,
    MaintenanceDetailSerializer,
)
from rest_framework.generics import RetrieveAPIView


class WorkshopListViewSet(AppListAPIViewSet):
    search_fields = ["identity", "phone", "address", "owner_name"]
    filterset_fields = []

    queryset = Workshop.objects.all()
    serializer_class = WorkshopReadSerializer

    column_details = {
        "identity": "Workshop Name",
        "owner_name": "Owner Name",
        "phone": "Phone Number",
        "address": "Address",
        "balance": "Balance",
    }
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {},
        }
        return data


class WorkshopCUDViewSet(AppCUDAPIViewSet):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopWriteSerializer


class WorkshopDetailAPIView(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopDetailSerializer


class MaintenanceListViewSet(AppListAPIViewSet):
    search_fields = [
        "workshop__identity",
        "driver__user__phone_number",
        "status",
        "vehicle__identity",
    ]
    filterset_fields = []

    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceReadSerializer

    column_details = {
        "workshop_details.identity": "Workshop Name",
        "vehicle_details.identity": "vehicle Name",
        "driver_details.user_details.phone_number": "Phone Number",
        "start_date": "Start Date",
        "end_date": "End Date",
        "start_km": "Start KM",
        "end_km": "End KM",
        "status": "Status",
    }
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "driver": self.serialize_for_filter(Driver.objects.all()),
                "workshop": self.serialize_for_filter(Workshop.objects.all()),
                "vehicle": self.serialize_for_filter(Vehicle.objects.all()),
                "status": self.serialize_choices(MAINTENANCE_STATUS_CHOICES["options"]),
            },
        }
        return data


class MaintenanceCUDViewSet(AppCUDAPIViewSet):
    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceWriteSerializer


class MaintenanceDetailAPIView(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = Maintenance.objects.all()
    serializer_class = MaintenanceDetailSerializer
