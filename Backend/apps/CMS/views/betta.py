from HELPERS.choices import BETTA_STATUS_CHOICES
from apps.ACCESS.models import Driver
from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppViewMixin,
)
from rest_framework.generics import RetrieveAPIView

from apps.CMS.models import Betta, Booking
from apps.CMS.serializers import BettaReadSerializer, BettaWriteSerializer


class BettaListAPIView(AppListAPIViewSet):
    search_fields = ["driver__identity", "status"]
    filterset_fields = {"amount": ["gte", "lte"], "paid_date": ["gte", "lte"]}
    queryset = Betta.objects.all()
    serializer_class = BettaReadSerializer

    column_details = {
        "driver_details.identity": "Driver Name",
        "booking_details.start_place": "Start Place",
        "booking_details.end_place": "End Place",
        "status": "Status",
        "paid_date": "Paid Date",
        "amount": "Amount",
    }
    filter_details = {"amount": "Amount", "paid_date": "Date"}

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {
                self.serialize_for_filter(Driver.objects.all()),
                self.serialize_for_filter(Booking.objects.all()),
                self.serialize_choices(BETTA_STATUS_CHOICES["options"]),
            },
        }
        return data


class BettaCUDAPIView(AppCUDAPIViewSet):
    queryset = Betta.objects.all()
    serializer_class = BettaWriteSerializer


class BettaDetailAPIView(AbstractLookUpFieldMixin, AppViewMixin, RetrieveAPIView):
    queryset = Betta.objects.all()
    serializer_class = BettaReadSerializer
