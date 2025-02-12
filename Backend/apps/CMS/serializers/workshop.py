from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Workshop, Maintenance, Vehicle
from apps.ACCESS.models import Driver, User


class WorkshopReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Workshop
        fields = [
            "id",
            "uuid",
            "identity",
            "owner_name",
            "phone",
            "address",
            "description",
            "specialist",
            "balance",
        ]


class WorkshopWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Workshop
        fields = [
            "identity",
            "owner_name",
            "phone",
            "address",
            "description",
            "specialist",
            "balance",
        ]


class WorkshopDetailSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Workshop
        fields = [
            "id",
            "uuid",
            "identity",
            "owner_name",
            "phone",
            "address",
            "description",
            "specialist",
            "balance",
        ]


class MaintenanceReadSerializer(ReadSerializer):
    workshop_details = read_serializer(
        meta_model=Workshop, meta_fields=["id", "uuid", "identity"]
    )(source="workshop")
    vehicle_details = read_serializer(
        meta_model=Vehicle, meta_fields=["id", "uuid", "identity"]
    )(source="vehicle")
    driver_details = read_serializer(
        meta_model=Driver,
        meta_fields=["id", "uuid", "identity"],
        init_fields_config={
            "user_details": read_serializer(
                meta_model=User, meta_fields=["id", "uuid", "phone_number"]
            )(source="user")
        },
    )(source="driver")

    class Meta(ReadSerializer.Meta):
        model = Maintenance
        fields = [
            "id",
            "uuid",
            "workshop_details",
            "vehicle_details",
            "driver_details",
            "status",
            "description",
            "start_date",
            "end_km",
            "start_date",
            "end_date",
        ]


class MaintenanceWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Maintenance
        fields = [
            "workshop",
            "vehicle",
            "driver",
            "status",
            "description",
            "start_date",
            "end_km",
            "start_date",
            "end_date",
        ]


class MaintenanceDetailSerializer(ReadSerializer):
    workshop_details = read_serializer(
        meta_model=Workshop, meta_fields=["id", "uuid", "identity"]
    )(source="workshop")
    vehicle_details = read_serializer(
        meta_model=Vehicle, meta_fields=["id", "uuid", "identity"]
    )(source="vehicle")
    driver_details = read_serializer(
        meta_model=Driver,
        meta_fields=["id", "uuid", "identity"],
        init_fields_config={
            "user_details": read_serializer(
                meta_model=User, meta_fields=["id", "uuid", "phone_number"]
            )(source="user")
        },
    )(source="driver")

    class Meta(ReadSerializer.Meta):
        model = Maintenance
        fields = [
            "id",
            "uuid",
            "workshop_details",
            "vehicle_details",
            "driver_details",
            "status",
            "description",
            "start_date",
            "end_km",
            "start_date",
            "end_date",
        ]
