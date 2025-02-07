from apps.BASE.serializers import ReadSerializer, WriteSerializer
from apps.CMS.models import OtherCab


class OtherCabListSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = OtherCab
        fields = [
            "id",
            "uuid",
            "identity",
            "owner_name",
            "phone_number",
            "address",
            "balace",
        ]

class OtherCabWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = OtherCab
        fields = [
            "identity",
            "owner_name",
            "phone_number",
            "address",
            "balace",
        ]