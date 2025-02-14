from apps.ACCESS.models import Customer, User, Driver
from apps.CMS.models import Vehicle, Booking
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


class CustomerBookingReadSerializer(ReadSerializer):
    # vehicle_details = read_serializer(
    #     meta_model=Vehicle, meta_fields=["id", "uuid", "identity"]
    # )(source="vehicle")
    # driver_details = read_serializer(
    #     meta_model=Driver,
    #     meta_fields=["id", "uuid", "identity"],
    #     init_fields_config={
    #         "user_details": read_serializer(
    #             meta_model=User, meta_fields=["id", "uuid", "phone_number"]
    #         )(source="user")
    #     },
    # )(source="driver")

    class Meta(ReadSerializer.Meta):
        model = Booking
        fields = [
            "id",
            "uuid",
            # "",
            # "vehicle_details",
            # "driver_details",
            # "start_date",
            # "end_date",
            # "start_place",
            # "end_place",
        ]
