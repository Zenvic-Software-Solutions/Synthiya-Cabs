from apps.ACCESS.models import User, Staff
from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer


class StaffReadSerializer(ReadSerializer):
    user_details = read_serializer(User, meta_fields=["id", "uuid", "phone_number"])(
        source="user"
    )

    class Meta(ReadSerializer.Meta):
        model = Staff
        fields = [
            "id",
            "uuid",
            "identity",
            "staff_id",
            "email",
            "address",
            "dob",
            "date_of_joining",
            "user_details",
        ]


class StaffWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Staff
        fields = [
            "identity",
            "staff_id",
            "email",
            "address",
            "dob",
            "date_of_joining",
            "user",
        ]

        def get_meta(self):
            user_uuid = self.instance.user.uuid
            if not user_uuid:
                raise ValueError(
                    "User UUID is required in the context to fetch the user."
                )

            user = User.objects.filter(uuid=user_uuid)

            return {
                "user_details": self.serialize_for_meta(
                    queryset=user,
                    fields=["id", "uuid", "phone_number"],
                ),
            }
