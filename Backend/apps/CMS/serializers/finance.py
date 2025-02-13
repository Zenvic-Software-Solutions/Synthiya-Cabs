from apps.CMS.models import Vehicle
from apps.CMS.models import FinanceHistory,Finance
from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer

class FinanceReadSerializer(ReadSerializer):
    vehicle_details = read_serializer(Vehicle, meta_fields=["id", "uuid", "vehicle_no", "identity"])(
        source="vehicle"
    )

    class Meta(ReadSerializer.Meta):
        model = Finance
        fields = [
            "id",
            "uuid",
            "vehicle_details",
            "finance_name",
            "finance_address",
            "contact_number",
            "total_amount",
            "total_no_due",
            "due_date",
            "due_amount",
            "initiated_date",
        ]


class FinanceWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model=Finance
        fields=[
            "vehicle",
            "finance_name",
            "finance_address",
            "contact_number",
            "total_amount",
            "total_no_due",
            "due_date",
            "due_amount",
            "initiated_date",
        ]

class FinanceHistoryReadSerializer(ReadSerializer):
    finance_details = read_serializer(Finance, meta_fields=["id", "uuid", "finance_name", "total_amount"])(
        source="finance"
    )

    class Meta(ReadSerializer.Meta):
        model = FinanceHistory
        fields = [
            "id",
            "uuid",
            "finance_details",
            "due_month",
            "paid_date",
            "amount",
        ]


class FinanceHistoryWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = FinanceHistory
        fields =[
            "finance",
            "due_month",
            "paid_date",
            "amount"
        ]