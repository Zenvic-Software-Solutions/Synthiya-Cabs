from apps.ACCESS.models import Driver, User
from apps.CMS.models import Booking, Vehicle
from apps.BASE.serializers import ReadSerializer, read_serializer


class DriverReadSerializer(ReadSerializer):
    user_details = read_serializer(User, meta_fields=["id", "uuid", "phone_number"])(
        source="user"
    )

    class Meta(ReadSerializer.Meta):
        model = Driver
        fields = [
            "id",
            "uuid",
            "identity",
            "driver_id",
            "email",
            "address",
            "dob",
            "license_no",
            "date_of_joining",
            "user_details",
        ]


class DriverBookingReadSerializer(ReadSerializer):
    vehicle_details = read_serializer(
        meta_model=Vehicle, meta_fields=["id", "uuid", "identity"]
    )(source="vehicle")

    class Meta(ReadSerializer.Meta):
        model = Booking
        fields = [
            "id",
            "uuid",
            # "",
            "vehicle_details",
            "start_date",
            "end_date",
            "start_place",
            "end_place",
        ]
