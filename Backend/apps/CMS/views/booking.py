from apps.BASE.views import (
    AppCUDAPIViewSet,
    AppListAPIViewSet,
    AbstractLookUpFieldMixin,
    AppAPIView,
)
from apps.CMS.models import (
    Booking,
    Vehicle,
    OtherCab,
    OtherDriver,
    OtherVehicle,
    Payment,
    Betta,
)
from apps.ACCESS.models import Driver, Customer
from apps.CMS.serializers import (
    BookingReadSerializer,
    BookingWriteSerializer,
    BookingRDetailSerializer,
)
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404


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
        "booking_id": "Booking ID",
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


class BookingView(AppAPIView):
    def post(self, request, *args, **kwargs):
        try:
            # Extract Required Data
            customer = get_object_or_404(Customer, uuid=request.data.get("customer"))
            vehicle = get_object_or_404(Vehicle, uuid=request.data.get("vehicle"))
            start_date = request.data.get("start_date")
            end_date = request.data.get("end_date")

            # Validate Dates
            if start_date >= end_date:
                return self.send_response(
                    {"error": "End date must be after start date."}
                )

            start_place = request.data.get("start_place")
            end_place = request.data.get("end_place")
            rent_type = request.data.get("rent_type")

            # Extract Optional Data
            driver = Driver.objects.filter(uuid=request.data.get("driver")).first()
            sponsor = Customer.objects.filter(uuid=request.data.get("sponsor")).first()
            other_cab = OtherCab.objects.filter(
                uuid=request.data.get("othercab")
            ).first()
            other_driver = OtherDriver.objects.get_or_create(
                identity=request.data.get("otherdriver_identity"),
                phone_number=request.data.get("otherdriver_phone_number"),
            )[0]
            other_vehicle = OtherVehicle.objects.get_or_create(
                identity=request.data.get("othervechile_identity"),
                vehicle_no=request.data.get("othervechile_vehicle_no"),
            )[0]

            # Create Booking
            booking = Booking.objects.create(
                customer=customer,
                vehicle=vehicle,
                othercab=other_cab,
                driver=driver,
                othervehicle=other_vehicle,
                otherdriver=other_driver,
                start_date=start_date,
                end_date=end_date,
                start_place=start_place,
                end_place=end_place,
                rent_type=rent_type,
                sponsor=sponsor,
            )
            # Create Payment
            deiver_betta = float(request.data.get("driver_betta", 0.00))
            total_amount = float(request.data.get("total_amount", 0.00))
            paid_amount = float(request.data.get("paid_amount", 0.00))
            deduction = float(request.data.get("deduction", 0.00))
            driver_betta_details = Betta.objects.get_or_create(
                driver=driver, booking=booking, amount=deiver_betta, status="pending"
            )

            payment = Payment.objects.create(
                booking=booking,
                driver_betta=driver_betta_details,
                halting_charge=float(request.data.get("halting_charge", 0.00)),
                hills_charge=float(request.data.get("hills_charge", 0.00)),
                permit=float(request.data.get("permit", 0.00)),
                commission=float(request.data.get("commission", 0.00)),
                total_amount=total_amount,
                gst=float(request.data.get("gst", 0.00)),
                deduction=deduction,
                advance=float(request.data.get("advance", 0.00)),
                paid_amount=paid_amount,
                other_details=request.data.get("other_details", ""),
                is_sponsor=request.data.get("is_sponsor", False),
                payment_type=request.data.get("payment_type", ""),
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
                        "balance": total_amount - paid_amount - deduction,
                    },
                }
            )

        except Exception as e:
            return self.send_error_response({"error": str(e)})
