from apps.BASE.serializers import ReadSerializer, read_serializer,WriteSerializer
from apps.ACCESS.models import Staff,User,Driver


class StaffReadSerializer(ReadSerializer):
    user_details = read_serializer(User,meta_fields=["id","uuid","phone_number"])(source="user")
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
            "user_details"
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
            "user"
        ]

        
class DriverReadSerializer(ReadSerializer):
    user_details = read_serializer(User,meta_fields=["id","uuid","phone_number"])(source="user")
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
            "user_details"
        ]


class UserReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = User
        fields =[
            "id",
            "uuid",
            "phone_number",
            "role",
        ]


