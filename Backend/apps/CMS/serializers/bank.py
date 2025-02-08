from apps.CMS.models import Bank, BankBalance
from apps.BASE.serializers import ReadSerializer, WriteSerializer

class BankReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model=Bank
        fields = [
            "id",
            "uuid",
            "identity",
            "branch",
            "account_no",
            "account_holder_name",
            "ifsc_code",
        ]


class BankWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model=Bank
        fields = [
            "identity",
            "branch",
            "account_no",
            "account_holder_name",
            "ifsc_code",
        ]


class BankBalanceReadSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = BankBalance
        fields =[
            "id",
            "uuid",
            "bank",
            "balance",
            "created_at",
        ]

class BankBalanceWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = BankBalance
        fields =[
            "bank",
            "balance",
        ]