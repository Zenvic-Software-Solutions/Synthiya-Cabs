from apps.BASE.serializers import ReadSerializer, WriteSerializer
from apps.CMS.models import Workshop, Maintenance

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


class MaintenanceReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Maintenance
        fields = [
            "id",
            "uuid",
            "workshop",
            "vechile",
            "driver",
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
            "vechile",
            "driver",
            "status",
            "description",
            "start_date",
            "end_km",
            "start_date",
            "end_date",
        ]
