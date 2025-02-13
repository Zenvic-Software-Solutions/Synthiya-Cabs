from apps.ACCESS.models import Driver, User
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
