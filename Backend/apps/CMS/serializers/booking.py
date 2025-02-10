from apps.BASE.serializers import ReadSerializer,WriteSerializer, read_serializer
from apps.CMS.models import Booking,Vechile,OtherCab,OtherDriver
from apps.ACCESS.models import Customer,Driver

class BookingReadSerializer(ReadSerializer):
    customer_details = read_serializer(Customer,meta_fields=["id",
                                                             "uuid","identity"])(source="customer")
    sponsor_details = read_serializer(Customer,meta_fields=["id",
                                                             "uuid","identity"])(source="sponsor")
    vechile_details = read_serializer(Vechile,meta_fields=["id",
                                                             "uuid","identity"])(source="vechile")
    cab_details = read_serializer(OtherCab,meta_fields=["id",
                                                             "uuid","identity"])(source="cab")
    driver_details = read_serializer(Driver,meta_fields=["id",
                                                             "uuid","identity"])(source="driver")
    otherdriver_details = read_serializer(OtherDriver,meta_fields=["id",
                                                             "uuid","identity"])(source="otherdriver")
    class Meta(ReadSerializer.Meta):
        model= Booking
        fields = [
            "id",
            "uuid",
            "customer_details",
            "vechile_details",
            "cab_details",
            "driver_details",
            "otherdriver_details",
            "start_date",
            "end_date",
            "start_place",
            "end_place",
            "no_of_days",
            "rent_amount",
            "advance",
            "sponsor_details"
        ]


class BookingWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model =Booking
        fields = [
            "customer",
            "vechile",
            "cab",
            "driver",
            "otherdriver",
            "start_date",
            "end_start",
            "start_place",
            "end_place",
            "no_of_days",
            "rent_amount",
            "advance",
            "sponsor"
        ]


        