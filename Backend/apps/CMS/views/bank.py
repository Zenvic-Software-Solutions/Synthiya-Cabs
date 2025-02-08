from apps.CMS.models import Bank, BankBalance
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet
from apps.CMS.serializers import BankReadSerializer, BankWriteSerializer, BankBalanceReadSerializer, BankBalanceWriteSerializer

class BankListViewSet(AppListAPIViewSet):
    search_fields=["identity"]
    filterset_fields=[]

    queryset = Bank.objects.all()
    serializer_class = BankReadSerializer

    column_details = {
        "identity":"Bank Name",
        "branch":"Branch Name",
        "account_no":"Account No",
        "account_holder_name":"Account Holder Name",
        "ifsc_code":"IFSC Code",
    }
    filter_details = {}

    def get_table_meta(self):

        data = {
            "column":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{}  
        }
        return data


class BankCUDViewSet(AppCUDAPIViewSet):

    queryset = Bank.objects.all()
    serializer_class = BankWriteSerializer


class BankBalanceListViewSet(AppListAPIViewSet):
    search_fields=["identity"]
    filterset_fields={
        "created_at_gte":["exact"],
        "created_at_lte":["exact"],
    }

    queryset = BankBalance.objects.all()
    serializer_class = BankBalanceReadSerializer
    column_details = {
        "bank":"bank Name",
        "created_at":"Date",
        "balance":"Balance",
    }
    filter_details = {
        "date" : "Date"
    }

    def get_table_meta(self):

        data = {
            "columns":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{
                "date":True
            }  
        }
        return data

class BankBalanceCUDViewSet(AppCUDAPIViewSet):
    queryset = BankBalance.objects.all()
    serializer_class = BankBalanceWriteSerializer