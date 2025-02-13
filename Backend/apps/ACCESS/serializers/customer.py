from apps.ACCESS.models import Customer, User
from apps.BASE.serializers import ReadSerializer, read_serializer


class CustomerReadSerializer(ReadSerializer):
    user_details = read_serializer(User, meta_fields=["id", "uuid", "phone_number"])(
        source="user"
    )

    class Meta(ReadSerializer.Meta):
        model = Customer
        fields = [
            "id",
            "uuid",
            "identity",
            "customer_id",
            "user_details",
        ]
