from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import OtherCab, OtherDriver, OtherVehicle


class OtherCabListSerializer(ReadSerializer):
    Otherdriver_details=read_serializer(OtherDriver,meta_fields=["id","uuid","identity"])(source="othervechile")

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
            "otherdriver_details",
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
            "otherdriver"
        ]



class OtherDriverReadserializer(ReadSerializer):
    # other_cab_name_details = read_serializer(meta_model=OtherCab, meta_fields=["id", "uuid", "identity", "owner_name", "phone_number"])(source="other_cab_name")
    class Meta(ReadSerializer.Meta):
        model = OtherDriver
        fields= [
            "id",
            "uuid",
            "identity",
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
            "vechile_type",
            "vechile_no",
            "is_ac_available",
        ]
class OtherVechileWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = OtherVehicle
        fields= [
            "identity",
            "other_cab_name",
            "vechile_type",
            "vechile_no",
            "is_ac_available",
        ]