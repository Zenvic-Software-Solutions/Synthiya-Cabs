from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import OtherCab, OtherDriver, OtherVehicle


class OtherCabListSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = OtherCab
        fields = [
            "id",
            "uuid",
            "identity",
            "owner_name",
            "phone_number",
            "address",
            "balance",
        ]

class OtherCabWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = OtherCab
        fields = [
            "identity",
            "owner_name",
            "phone_number",
            "address",
            "balance",
        ]



class OtherDriverReadserializer(ReadSerializer):
    other_cab_name_details = read_serializer(meta_model=OtherCab, meta_fields=["id", "uuid", "identity", "owner_name", "phone_number"])(source="other_cab_name")
    class Meta(ReadSerializer.Meta):
        model = OtherDriver
        fields= [
            "id",
            "uuid",
            "identity",
            "other_cab_name_details",
            "phone_number",
        ]
class OtherDriverWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = OtherDriver
        fields= [
            "identity",
            "other_cab_name",
            "phone_number",
        ]
class OtherVechileReadserializer(ReadSerializer):
    other_cab_name_details = read_serializer(meta_model=OtherCab, meta_fields=["id", "uuid", "identity", "owner_name", "phone_number"])(source="other_cab_name")
    class Meta(ReadSerializer.Meta):
        model = OtherVehicle
        fields= [
            "id",
            "uuid",
            "identity",
            "other_cab_name_details",
            "vehicle_type",
            "vehicle_no",
            "is_ac_available",
        ]
class OtherVechileWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = OtherVehicle
        fields= [
            "identity",
            "other_cab_name",
            "vehicle_type",
            "vehicle_no",
            "is_ac_available",
        ]