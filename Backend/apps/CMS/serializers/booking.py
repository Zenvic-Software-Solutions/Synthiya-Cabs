from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Booking, Vehicle, OtherCab, OtherDriver
from apps.ACCESS.models import Customer, Driver


class BookingReadSerializer(ReadSerializer):
    customer_details = read_serializer(
        Customer, meta_fields=["id", "uuid", "identity"]
    )(source="customer")
    sponsor_details = read_serializer(Customer, meta_fields=["id", "uuid", "identity"])(
        source="sponsor"
    )
    vehicle_details = read_serializer(Vehicle, meta_fields=["id", "uuid", "identity"])(
        source="vehicle"
    )
    cab_details = read_serializer(OtherCab, meta_fields=["id", "uuid", "identity"])(
        source="cab"
    )
    driver_details = read_serializer(Driver, meta_fields=["id", "uuid", "identity"])(
        source="driver"
    )
    otherdriver_details = read_serializer(
        OtherDriver, meta_fields=["id", "uuid", "identity"]
    )(source="otherdriver")

    class Meta(ReadSerializer.Meta):
        model = Booking
        fields = [
            "id",
            "uuid",
            "customer_details",
            "vehicle_details",
            "cab_details",
            "driver_details",
            "otherdriver_details",
            "start_date",
            "end_date",
            "start_place",
            "end_place",
            "no_of_days",
            "sponsor_details",
        ]


class BookingWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Booking
        fields = [
            "customer",
            "vehicle",
            "cab",
            "driver",
            "otherdriver",
            "start_date",
            "end_date",
            "start_place",
            "end_place",
            "no_of_days",
            "sponsor",
        ]


class BookingRDetailSerializer(ReadSerializer):
    customer_details = read_serializer(
        Customer, meta_fields=["id", "uuid", "identity"]
    )(source="customer")
    sponsor_details = read_serializer(Customer, meta_fields=["id", "uuid", "identity"])(
        source="sponsor"
    )
    vehicle_details = read_serializer(Vehicle, meta_fields=["id", "uuid", "identity"])(
        source="vehicle"
    )
    cab_details = read_serializer(OtherCab, meta_fields=["id", "uuid", "identity"])(
        source="cab"
    )
    driver_details = read_serializer(Driver, meta_fields=["id", "uuid", "identity"])(
        source="driver"
    )
    otherdriver_details = read_serializer(
        OtherDriver, meta_fields=["id", "uuid", "identity"]
    )(source="otherdriver")

    class Meta(ReadSerializer.Meta):
        model = Booking
        fields = [
            "id",
            "uuid",
            "customer_details",
            "vehicle_details",
            "cab_details",
            "driver_details",
            "otherdriver_details",
            "start_date",
            "end_date",
            "start_place",
            "end_place",
            "no_of_days",
            "sponsor_details",
        ]
