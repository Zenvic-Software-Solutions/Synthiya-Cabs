from apps.CMS.serializers import (
    VehicleReadSerializer,
    VehicleWriteSerializer,
    VehicleDetailSerializer,
    VehicleMaintenanceReadSerializer,
    VehicleFinanceReadSerializer,
    VehicleTripReadSerializer,
)
from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.models import Vehicle, Maintenance, Trip, Finance
from HELPERS import VEHICLE_TYPE
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404


class VehicleListViewSet(AppListAPIViewSet):
    search_fields = []
    filterset_fields = []

    queryset = Vehicle.objects.all()
    serializer_class = VehicleReadSerializer

    column_details = {
        "identity": "Vehicle Name",
        "vehicle_type": "Vehicle Type",
        "vehicle_no": "Vehicle No",
        "is_ac_available": "AC Availability",
        "last_km": "last KM",
    }
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "vehicle_type": self.serialize_choices(VEHICLE_TYPE["options"]),
            },
        }
        return data


class VehicleCUDViewSet(AppCUDAPIViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleWriteSerializer


class VehicleDetailViewSet(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleDetailSerializer


class VehicleMaintenanceAPIView(AppListAPIViewSet):
    search_fields = []
    filterset_fields = []
    serializer_class = VehicleMaintenanceReadSerializer

    def get_queryset(self, *args, **kwargs):
        uuid = self.kwargs.get("uuid")

        vehicle = get_object_or_404(Vehicle, uuid=uuid)
        return Maintenance.objects.filter(vehicle=vehicle)

    column_details = {}
    filter_details = {}

    def get_table_meta(self):
        return {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {},
        }


class VehicleFinanceAPIView(AppListAPIViewSet):
    search_fields = []
    filterset_fields = []

    serializer_class = VehicleFinanceReadSerializer

    def get_queryset(self, *args, **kwargs):
        uuid = self.kwargs.get("uuid")
        vehicle = get_object_or_404(Vehicle, uuid=uuid)
        return Finance.objects.filter(vehicle=vehicle)

    column_details = {}
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "vehicle_type": self.serialize_choices(VEHICLE_TYPE["options"]),
            },
        }
        return data


class VehicleTripAPIView(AppListAPIViewSet):
    search_fields = []
    filterset_fields = []

    serializer_class = VehicleTripReadSerializer

    def get_queryset(self, *args, **kwargs):
        uuid = self.kwargs.get("uuid")
        vehicle = get_object_or_404(Vehicle, uuid=uuid)
        return Trip.objects.filter(vehicle=vehicle)

    column_details = {}
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "vehicle_type": self.serialize_choices(VEHICLE_TYPE["options"]),
            },
        }
        return data
