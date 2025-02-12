from apps.BASE.serializers import ReadSerializer, WriteSerializer, read_serializer
from apps.CMS.models import Category, Ledger, SubLedger, Transaction


class CategoryListSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Category
        fields = [
            "id",
            "uuid",
            "category",
            "account_type",
        ]


class LedgerListSerializer(ReadSerializer):
    class Meta(ReadSerializer.Meta):
        model = Ledger
        fields = [
            "id",
            "uuid",
            "name",
        ]


class SubLedgerListSerializer(ReadSerializer):
    ledger_name = read_serializer(
        meta_model=Ledger, meta_fields=["id", "uuid", "name"]
    )(source="ledger")

    class Meta(ReadSerializer.Meta):
        model = SubLedger
        fields = [
            "id",
            "uuid",
            "ledger_name",
            "sub_ledger",
        ]


class TransactionListSerializer(ReadSerializer):
    category_details = read_serializer(
        meta_model=Category, meta_fields=["id", "uuid", "category", "account_type"]
    )(source="category")
    # account_type_name = read_serializer(
    #     meta_model=Category, meta_fields=["id", "uuid", "category", "account_type"]
    # )(source="category")
    sub_ledger_name = read_serializer(
        meta_model=SubLedger,
        meta_fields=["id", "uuid", "sub_ledger"],
        init_fields_config={
            "ledger_name_details": read_serializer(
                meta_model=Ledger, meta_fields=["id", "uuid", "name"]
            )(source="ledger_name")
        },
    )(source="sub_ledger")

    class Meta(ReadSerializer.Meta):
        model = Transaction
        fields = [
            "id",
            "uuid",
            "category_details",
            "sub_ledger_name",
            "description",
            "amount",
        ]


class TransactionWriteSerializer(WriteSerializer):
    class Meta(WriteSerializer.Meta):
        model = Transaction
        fields = [
            "category",
            "sub_ledger",
            "description",
            "amount",
        ]
