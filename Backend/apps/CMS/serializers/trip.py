from apps.ACCESS.models import Customer
from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Trip,Vechile

class TripReadSerializer(ReadSerializer):
    customer_details = read_serializer(Customer,meta_fields=["id",
                                                             "uuid",
                                                             "identity"])(source="customer")
    vechile_details = read_serializer(Vechile,meta_fields=["id",
                                                           "uuid","identity","vechile_type","vechile_no"])(source="vechile")   
    class Meta(ReadSerializer.Meta):
        model = Trip
        fields = [
            "id",
            "uuid",
            "customer_details",
            "vechile_details",
            "start_date",
            "end_date",
            "start_km",
            "end_km",
            "description"
        ]


class TripWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Trip
        fields =[
            "customer",
            "vechile",
            "start_date",
            "end_date",
            "start_km",
            "end_km",
            "description"
        ]
    