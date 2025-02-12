from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.models import Booking, Vehicle, OtherCab, OtherDriver
from apps.ACCESS.models import Driver, Customer
from apps.CMS.serializers import (
    BookingReadSerializer,
    BookingWriteSerializer,
    BookingRDetailSerializer,
)
from rest_framework.generics import RetrieveAPIView


class BookingListAPIView(AppListAPIViewSet):
    search_fields = [
        "customer__identity",
        "vechicle__identity",
        "cab__identity",
        "driver__identity",
        "otherdriver__identity",
        "sponsor__identity",
        "start_date",
        "end_date",
        "start_place",
        "end_place",
        "no_of_days",
    ]
    filterset_fields = {
        "start_date": ["gte", "lte"],
        "end_start": ["gte", "lte"],
        "start_place": ["exact"],
        "end_place": ["exact"],
        "rent_amount": ["gte", "lte"],
        "vechicle__identity": ["exact"],
        "cab__identity": ["exact"],
        "driver__identity": ["exact"],
        "otherdriver__identity": ["exact"],
        "sponsor__identity": ["exact"],
    }

    queryset = Booking.objects.all()
    serializer_class = BookingReadSerializer

    column_details = {
        "customer_details.identity": "Customer Name",
        "vehicle_details.identity": "Vehicle Name",
        "cab_details.identity": "Cab Name",
        "driver_details.identity": "Driver Name",
        "otherdriver_details.identity": "Other Driver Name",
        "start_date": "Starting Date",
        "end_date": "Ending Date",
        "start_place": "Starting Place",
        "end_place": "Ending Place",
        "no_of_days": "No of Days",
        "rent_amount": "Rent Amount",
        "advance": "Advance",
        "sponsor_details.identity": "Sponsor Name",
    }

    filter_details = {
        "rent_amount": "Amount",
        "start_date": "StartDate",
        "end_date": "End Date",
        "start_place": "Start Place",
        "end_place": "End place",
        "vehicle__identity": "Vehicle Name",
        "cab__identity": "Cab Name",
        "otherdriver__identity": "OtherDriver Name",
        "sponsor__identity": "Sponsor Name",
        "driver_identity": "Driver Name",
    }

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {
                "customer": self.serialize_for_filter(Customer.objecys.all()),
                "vehicle": self.serialize_for_filter(Vehicle.objects.all()),
                "cab": self.serialize_for_filter(OtherCab.objects.all()),
                "driver": self.serialize_for_filter(Driver.objects.all()),
                "sponsor": self.serialize_for_filter(Customer.objects.all()),
                "otherdriver": self.serialize_for_filter(OtherDriver.objects.all()),
            },
        }


class BookingCUDAPIView(AppCUDAPIViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingWriteSerializer


class BankDetailViewSet(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingRDetailSerializer
