from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Vehicle, Maintenance, Trip, Finance


class VehicleReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Vehicle
        fields = [
            "id",
            "uuid",
            "identity",
            "vehicle_type",
            "vehicle_no",
            "is_ac_available",
            "last_km",
        ]


class VehicleWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Vehicle
        fields = [
            "identity",
            "vehicle_type",
            "vehicle_no",
            "is_ac_available",
            "last_km",
        ]


class VehicleDetailSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Vehicle
        fields = [
            "id",
            "uuid",
            "identity",
            "vehicle_type",
            "vehicle_no",
            "is_ac_available",
            "last_km",
        ]


class VehicleMaintenanceReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Maintenance
        fields = [
            "id",
            "uuid",
            "status",
            "description",
            "start_km",
            "end_km",
            "start_date",
            "end_date",
        ]


class VehicleTripReadSerializer(ReadSerializer):
    vehicle_details = read_serializer(
        Vehicle, meta_fields=["id", "uuid", "identity", "vehicle_type", "vehicle_no"]
    )(source="vehicle")

    class Meta(ReadSerializer.Meta):
        model = Trip
        fields = [
            "id",
            "uuid",
            "vehicle_details",
            "start_date",
            "end_date",
            "start_km",
            "end_km",
            "description",
        ]


class VehicleFinanceReadSerializer(ReadSerializer):
    vehicle_details = read_serializer(
        Vehicle, meta_fields=["id", "uuid", "vehicle_no", "identity"]
    )(source="vehicle")

    class Meta(ReadSerializer.Meta):
        model = Finance
        fields = [
            "id",
            "uuid",
            "vehicle_details",
            "identity",
            "finance_address",
            "contact_number",
            "total_amount",
            "total_no_due",
            "due_date",
            "due_amount",
            "initiated_date",
        ]
