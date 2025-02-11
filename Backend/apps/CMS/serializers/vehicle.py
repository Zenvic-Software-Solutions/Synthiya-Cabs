from apps.BASE.serializers import ReadSerializer, WriteSerializer
from apps.CMS.models import Vehicle


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
