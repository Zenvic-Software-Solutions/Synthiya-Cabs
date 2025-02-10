from apps.ACCESS.models import Customer
from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Trip,Vehicle

class TripReadSerializer(ReadSerializer):
    customer_details = read_serializer(Customer,meta_fields=["id",
                                                             "uuid",
                                                             "identity"])(source="customer")
    vehicle_details = read_serializer(Vehicle,meta_fields=["id",
                                                           "uuid","identity","vehicle_type","vehicle_no"])(source="vehicle")   
    class Meta(ReadSerializer.Meta):
        model = Trip
        fields = [
            "id",
            "uuid",
            "customer_details",
            "vehicle_details",
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
            "vehicle",
            "start_date",
            "end_date",
            "start_km",
            "end_km",
            "description"
        ]
    