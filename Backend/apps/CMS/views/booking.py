from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.models import Booking, Vehicle, OtherCab, OtherDriver, Payment, Betta
from apps.ACCESS.models import Driver, Customer
from apps.CMS.serializers import (
    BookingReadSerializer,
    BookingWriteSerializer,
    BookingRDetailSerializer,
)
from rest_framework.generics import RetrieveAPIView


class BookingListAPIView(AppListAPIViewSet):
    search_fields = [
        # "customer__identity",
        # "vechicle__identity",
        # "cab__identity",
        # "driver__identity",
        # "otherdriver__identity",
        # "sponsor__identity",
        # "start_date",
        # "end_date",
        # "start_place",
        # "end_place",
        # "no_of_days",
    ]
    filterset_fields = {
        # "start_date": ["gte", "lte"],
        # "end_start": ["gte", "lte"],
        # "start_place": ["exact"],
        # "end_place": ["exact"],
        # "rent_amount": ["gte", "lte"],
        # "vechicle__identity": ["exact"],
        # "cab__identity": ["exact"],
        # "driver__identity": ["exact"],
        # "otherdriver__identity": ["exact"],
        # "sponsor__identity": ["exact"],
    }

    queryset = Booking.objects.all()
    serializer_class = BookingReadSerializer

    column_details = {
        "customer_details.identity": "Customer Name",
        "vehicle_details.identity": "Vehicle Name",
        "cab_details.identity": "OtherCab Name",
        # "driver_details.identity": "Driver Name",
        # "otherdriver_details.identity": "Other Driver Name",
        "start_date": "Starting Date",
        # "end_date": "Ending Date",
        "start_place": "Starting Place",
        # "end_place": "Ending Place",
        "no_of_days": "No of Days",
        # "sponsor_details.identity": "Sponsor Name",
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
                "customer": self.serialize_for_filter(Customer.objects.all()),
                "vehicle": self.serialize_for_filter(Vehicle.objects.all()),
                "othercab": self.serialize_for_filter(OtherCab.objects.all()),
                "driver": self.serialize_for_filter(Driver.objects.all()),
                "sponsor": self.serialize_for_filter(Customer.objects.all()),
                "otherdriver": self.serialize_for_filter(OtherDriver.objects.all()),
            },
        }
        return data


class BookingCUDAPIView(AppCUDAPIViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingWriteSerializer


class BookingDetailViewSet(AbstractLookUpFieldMixin, AppAPIView, RetrieveAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingRDetailSerializer


from django.shortcuts import get_object_or_404


class BookingView(AppAPIView):
    def post(self, request, *args, **kwargs):
        try:
            # Extract Data
            customer = get_object_or_404(Customer, uuid=request.data.get("customer"))
            vehicle = get_object_or_404(Vehicle, uuid=request.data.get("vehicle"))
            othercab = request.data.get("othercab")
            driver = request.data.get("driver")
            otherdriver = request.data.get("otherdriver")
            start_date = request.data.get("start_date")
            end_date = request.data.get("end_date")
            start_place = request.data.get("start_place")
            end_place = request.data.get("end_place")
            rent_type = request.data.get("rent_type")
            sponsor = request.data.get("sponsor")

            # Optional Fields
            driver = Driver.objects.filter(uuid=driver).first() if driver else None
            # otherdriver = OtherDriver.objects.filter(uuid=otherdriver).first() if otherdriver else None
            # othercab = OtherCab.objects.filter(uuid=othercab).first() if othercab else None
            # sponsor = Customer.objects.filter(uuid=sponsor).first() if sponsor else None

            # Other Driver
            otherdriver_identity = request.data.get("otherdriver_identity")
            other_cab_name = get_object_or_404(
                Vehicle, uuid=request.data.get("other_cab_name")
            )
            otherdriver_phone_number = request.data.get("phone_number")

            # Other Vechile
            othervechile_identity = request.data.get("othervechile_identity")
            othervechile_phone_number = request.data.get("othervechile_phone_number")

            # Validate Dates
            if start_date >= end_date:
                return self.send_response(
                    {"error": "End date must be after start date."}
                )

            # Create Booking
            booking = Booking.objects.create(
                customer=customer,
                vehicle=vehicle,
                othercab=othercab,
                driver=driver,
                otherdriver=otherdriver,
                start_date=start_date,
                end_date=end_date,
                start_place=start_place,
                end_place=end_place,
                rent_type=rent_type,
                sponsor=sponsor,
            )

            # Create Payment
            driver_betta = request.data.get("driver_betta")
            halting_charge = float(request.data.get("halting_charge", 0.00))
            hills_charge = float(request.data.get("hills_charge", 0.00))
            permit = float(request.data.get("permit", 0.00))
            commission = float(request.data.get("commission", 0.00))
            total_amount = float(request.data.get("total_amount", 0.00))
            gst = float(request.data.get("gst", 0.00))
            deduction = float(request.data.get("deduction", 0.00))
            advance = float(request.data.get("advance", 0.00))
            paid_amount = float(request.data.get("paid_amount", 0.00))
            balance = total_amount - paid_amount - deduction
            other_details = request.data.get("other_details", "")
            is_sponsor = request.data.get("is_sponsor", False)
            payment_type = request.data.get("payment_type", "")

            # Validate driver_betta
            driver_betta = (
                Betta.objects.filter(id=driver_betta).first() if driver_betta else None
            )

            payment = Payment.objects.create(
                booking=booking,
                driver_betta=driver_betta,
                halting_charge=halting_charge,
                hills_charge=hills_charge,
                permit=permit,
                commission=commission,
                total_amount=total_amount,
                gst=gst,
                deduction=deduction,
                advance=advance,
                paid_amount=paid_amount,
                other_details=other_details,
                is_sponsor=is_sponsor,
                payment_type=payment_type,
            )

            # Response
            return self.send_response(
                {
                    "message": "Booking successfully created",
                    "booking_id": booking.id,
                    "payment_id": payment.id,
                    "details": {
                        "customer": booking.customer.id,
                        "vehicle": booking.vehicle.id,
                        "start_date": booking.start_date,
                        "end_date": booking.end_date,
                        "total_amount": payment.total_amount,
                        "balance": payment.balance,
                    },
                }
            )

        except Exception as e:
            return self.send_error_response({"error": str(e)})
