from apps.CMS.serializers import (
    TransactionListSerializer,
    TransactionWriteSerializer,
    LedgerListSerializer,
    SubLedgerListSerializer,
    CategoryListSerializer,
)
from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import Transaction, Ledger, SubLedger, Category


class TransactionListViewSet(AppListAPIViewSet):
    search_fields = ["identity"]
    filterset_fields = []

    queryset = Transaction.objects.all().order_by("-created_by")
    serializer_class = TransactionListSerializer
    column_details = {
        # "identity":"Cab Name",
        # "owner_name":"Owner Name",
        # "phone_number":"Phone Number",
        # "address":"Address",
        # "balance":"Balance",
    }
    filter_details = {}

    def get_table_meta(self):
        data = {
            "columns": self.get_table_columns_details(),
            "filters": self.get_table_filter_details(),
            "filter_data": {},
        }
        return data


class TransactionCUDViewSet(AppCUDAPIViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionWriteSerializer
