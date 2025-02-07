from apps.BASE.serializers import ReadSerializer, WriteSerializer
from apps.CMS.models import Vehicle

class VechileReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        models = Vehicle
        fields = [
            "id",
            "uuid",
            "identity",
            "vechile_type",
            "vechile_no",
            "is_ac_available",
            "last_km",
        ]

class VechileWriteSerializer(WriteSerializer):
    class Meta(ReadSerializer.Meta):
        models = Vehicle
        fields = [
            "identity",
            "vechile_type",
            "vechile_no",
            "is_ac_available",
            "last_km",
        ]