from apps.CMS.models import Betta, Booking
from apps.ACCESS.models import Driver
from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer

class BettaReadSerializer(ReadSerializer):
    driver_details=read_serializer(Driver, meta_fields=["id", "uuid", "identity"])(source = "driver")
    booking_details=read_serializer(Booking, meta_fields=["id", "uuid", "start_place", "end_place"])(source = "booking")
    class Meta(ReadSerializer.Meta):
        model=Betta
        fields = [
            "id",
            "uuid",
            "driver_details",
            "booking_details",
            "amount",
            "status",
            "paid_date",
        ]


class BettaWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model=Betta
        fields = [
            "driver",
            "booking",
            "amount",
            "status",
            "paid_date",
        ]
