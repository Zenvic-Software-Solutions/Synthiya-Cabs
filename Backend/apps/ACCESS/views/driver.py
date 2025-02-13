from apps.ACCESS.models import Driver, User
from apps.CMS.models import Booking
from apps.ACCESS.serializers import DriverReadSerializer, DriverBookingReadSerializer
from apps.BASE.base import AppAPIView
from apps.BASE.views import AppListAPIViewSet


class DriverCUDPAPIView(AppAPIView):
    def post(self, request, *args, **kwargs):
        identity = request.data.get("identity")
        driver_id = request.data.get("driver_id")
        email = request.data.get("email")
        address = request.data.get("address")
        license_no = request.data.get("license_no")
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        dob = request.data.get("dob")
        date_of_joining = request.data.get("date_of_joining")

        user, created = User.objects.get_or_create(phone_number=phone_number)
        if created:
            user.set_password(password)
            user.save()
        if Driver.objects.filter(user=user).exists():
            return self.send_error_response({"error": "User not found"})

        Driver.objects.create(
            identity=identity,
            email=email,
            address=address,
            license_no=license_no,
            driver_id=driver_id,
            dob=dob,
            date_of_joining=date_of_joining,
            user=user,
        )
        return self.send_response({"message": "Driver Created Successfully"})


class DriverUpdateAPIView(AppAPIView):
    def put(self, request, uuid, *args, **kwargs):
        identity = request.data.get("identity")
        driver_id = request.data.get("driver_id")
        email = request.data.get("email")
        address = request.data.get("address")
        license_no = request.data.get("license_no")
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        dob = request.data.get("dob")
        date_of_joining = request.data.get("date_of_joining")

        try:
            driver = Driver.objects.get(uuid=uuid)
        except Driver.DoesNotExist:
            return self.send_error_response({"error": "Driver not found"})

        user = driver.user

        # Update driver details
        driver.identity = identity if identity else driver.identity
        driver.driver_id = driver_id if driver_id else driver.driver_id
        driver.email = email if email else driver.email
        driver.address = address if address else driver.address
        driver.license_no = license_no if license_no else driver.license_no
        driver.dob = dob if dob else driver.dob
        driver.date_of_joining = (
            date_of_joining if date_of_joining else driver.date_of_joining
        )

        # Update user details
        if phone_number:
            user.phone_number = phone_number
        if password:
            user.set_password(password)

        user.save()
        driver.save()

        return self.send_response({"message": "Driver Updated Successfully"})


class DriverRetrieveAPIView(AppAPIView):
    def get(self, request, uuid, *args, **kwargs):
        try:
            driver = Driver.objects.get(uuid=uuid)
        except Driver.DoesNotExist:
            return self.send_error_response({"error": "Driver not found"})

        data = {
            "initial": {
                "identity": driver.identity,
                "driver_id": driver.driver_id,
                "email": driver.email,
                "address": driver.address,
                "license_no": driver.license_no,
                "dob": driver.dob,
                "date_of_joining": driver.date_of_joining,
                "user_phone_number": driver.user.phone_number,
            }
        }

        return self.send_response(data)


class DriverListAPIView(AppListAPIViewSet):
    search_fields = [
        "user__phone_number",
        "driver_id",
        "identity",
        "email",
        "license_no",
    ]
    filterset_fields = {"dob": ["gte", "lte"], "date_of_joining": ["gte", "lte"]}
    queryset = Driver.objects.all()
    serializer_class = DriverReadSerializer

    column_details = {
        "identity": "Name",
        "driver_id": "Driver ID",
        "user_details.phone_number": "Phone Number",
        "dob": "Birth Date",
        "date_of_joining": "Joining Date",
    }

    filter_details = {"dob": "Birth", "date_of_joining": "Joining Date"}

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {},
        }
        return data


class DriverTripApiView(AppListAPIViewSet):
    search_fields = [
        "identity",
    ]
    filterset_fields = {"": ["exact"]}
    column_details = {}
    filter_details = {}
    serializer_class = DriverBookingReadSerializer

    def get_queryset(self):
        queryset = Booking.objects.all()
        return queryset
