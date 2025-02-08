from apps.BASE.serializers import ReadSerializer, WriteSerializer
from apps.CMS.models import Workshop

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
