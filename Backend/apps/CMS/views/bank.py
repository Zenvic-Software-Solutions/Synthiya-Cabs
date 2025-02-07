from apps.CMS.models import Bank, BankBalance
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet
from apps.CMS.serializers import BankReadSerializer, BankWriteSerializer, BankBalanceReadSerializer, BankBalanceWriteSerializer

class BankListViewSet(AppListAPIViewSet):
    search_fields=[]
    filterset_fields=[]

    queryset = Bank.objects.all()
    serializer_class = BankReadSerializer

    column_details = {}
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
    search_fields=[]
    filterset_fields=[]

    queryset = BankBalance.objects.all()
    serializer_class = BankBalanceReadSerializer
    column_details = {}
    filter_details = {}

    def get_table_meta(self):

        data = {
            "column":self.get_table_columns_details(),  
            "filters":self.get_table_filter_details(),
            "filter_data":{}  
        }
        return data

class BankBalanceCUDViewSet(AppCUDAPIViewSet):
    queryset = BankBalance.objects.all()
    serializer_class = BankBalanceWriteSerializer