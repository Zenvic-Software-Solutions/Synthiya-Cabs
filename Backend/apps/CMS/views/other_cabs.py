from apps.CMS.serializers import (
    OtherCabListSerializer,
    OtherCabWriteSerializer,
    OtherCabDetailSerializer,
    OtherDriverReadserializer,
    OtherDriverWriteSerializer,
    OtherVehicleReadserializer,
    OtherVehicleWriteSerializer,
)
from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from rest_framework.generics import RetrieveAPIView
from apps.CMS.models import OtherCab, OtherDriver, OtherVehicle
from HELPERS import VEHICLE_TYPE


class OtherCabsListViewSet(AppListAPIViewSet):
    search_fields = ["identity"]
    filterset_fields = []

    queryset = OtherCab.objects.all().order_by("-created_by")
    serializer_class = OtherCabListSerializer
    column_details = {
        "identity": "Cab Name",
        "owner_name": "Owner Name",
        "phone_number": "Phone Number",
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


class OtherCabsCUDViewSet(AppCUDAPIViewSet):
    queryset = OtherCab.objects.all()
    serializer_class = OtherCabWriteSerializer


class OtherCabDetailViewSet(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = OtherCab.objects.all()
    serializer_class = OtherCabDetailSerializer


class OtherDriverListViewSet(AppListAPIViewSet):
    search_fields = ["identity"]
    filterset_fields = []

    serializer_class = OtherDriverReadserializer

    def get_queryset(self):
        uuid = self.kwargs.get("uuid")
        queryset = OtherDriver.objects.filter(uuid=uuid).order_by("-created_by")
        return queryset

    column_details = {
        "identity": "Cab Name",
        "other_cab_name_details.owner_name": "Owner Name",
        "other_cab_name_details.phone_number": "Phone Number",
        "phone_number": "Phone Number",
    }
    filter_details = {}

    def get_table_meta(self, *args, **kwargs):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "other_cab_name": self.serialize_for_filter(
                    OtherCab.objects.all(), fields=["id", "uuid", "identity"]
                )
            },
        }
        return self.send_response(data)


class OtherDriverCUDViewSet(AppCUDAPIViewSet):
    queryset = OtherDriver.objects.all()
    serializer_class = OtherDriverWriteSerializer


class OtherVehicleListViewSet(AppListAPIViewSet):
    search_fields = ["identity"]
    filterset_fields = []

    def get_queryset(self):
        uuid = self.kwargs.get("uuid")
        queryset = OtherVehicle.objects.filter(uuid=uuid).order_by("-created_by")
        return queryset

    serializer_class = OtherVehicleReadserializer
    column_details = {
        "identity": "Vehicle Name",
        "other_cab_name_details.owner_name": "Cab Owner Name",
        "other_cab_name_details.phone_number": "Cab Phone Number",
        "vehicle_type": "Vehicle Type",
        "vehicle_no": "Vehicle No",
        "is_ac_available": "AC Availability",
    }
    filter_details = {}

    def get_table_meta(self, *args, **kwargs):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {
                "vehicle_type": self.serialize_choices(VEHICLE_TYPE["options"]),
                "other_cab_name": self.serialize_for_filter(
                    OtherCab.objects.all(), fields=["id", "uuid", "identity"]
                ),
            },
        }
        return self.send_response(data)


class OtherVehicleCUDViewSet(AppCUDAPIViewSet):
    queryset = OtherVehicle.objects.all()
    serializer_class = OtherVehicleWriteSerializer
