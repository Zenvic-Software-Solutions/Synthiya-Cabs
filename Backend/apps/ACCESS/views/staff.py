from apps.ACCESS.models import Staff, User
from apps.ACCESS.serializers import StaffReadSerializer
from apps.BASE.base import AppAPIView
from apps.BASE.views import AppListAPIViewSet
from rest_framework.permissions import AllowAny


class StaffListAPIView(AppListAPIViewSet):
    search_fields = ["user__phone_number", "staff_id", "identity", "email"]
    filterset_fields = {"dob": ["gte", "lte"], "date_of_joining": ["gte", "lte"]}
    queryset = Staff.objects.all()

    serializer_class = StaffReadSerializer

    column_details = {
        "identity": "Name",
        "staff_id": "Staff ID",
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


class StaffCUDAPIView(AppAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        identity = request.data.get("identity")
        email = request.data.get("email")
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        staff_id = request.data.get("staff_id")
        address = request.data.get("address")
        dob = request.data.get("dob")
        date_of_joining = request.data.get("date_of_joining")

        user, created = User.objects.get_or_create(phone_number=phone_number)

        if created:
            user.set_password(password)
            user.save()
        if Staff.objects.filter(user=user).exists():
            return self.send_error_response(
                {"error": "Staff record already exists for this user"}
            )

        Staff.objects.create(
            identity=identity,
            staff_id=staff_id,
            email=email,
            address=address,
            dob=dob,
            date_of_joining=date_of_joining,
            user=user,
        )

        return self.send_response({"message": "Staff created successfully"})


class StaffUpdateAPIView(AppAPIView):
    def put(self, request, uuid, *args, **kwargs):
        identity = request.data.get("identity")
        staff_id = request.data.get("staff_id")
        email = request.data.get("email")
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        address = request.data.get("address")
        dob = request.data.get("dob")
        date_of_joining = request.data.get("date_of_joining")

        try:
            staff = Staff.objects.get(uuid=uuid)
        except Staff.DoesNotExist:
            return self.send_error_response({"error": "Staff not found"})

        user = staff.user
        staff.identity = identity if identity else staff.identity
        staff.staff_id = staff_id if staff_id else staff.staff_id
        staff.email = email if email else staff.email
        staff.address = address if address else staff.address
        staff.dob = dob if dob else staff.dob
        staff.date_of_joining = (
            date_of_joining if date_of_joining else staff.date_of_joining
        )

        if phone_number:
            user.phone_number = phone_number
        if password:
            user.set_password(password)

        user.save()
        staff.save()

        return self.send_response({"message": "Staff updated successfully"})


class StaffRetrieveAPIView(AppAPIView):
    def get(self, request, uuid, *args, **kwargs):
        try:
            staff = Staff.objects.get(uuid=uuid)
        except Staff.DoesNotExist:
            return self.send_error_response({"error": "Staff not found"})

        data = {
            "initial": {
                "identity": staff.identity,
                "staff_id": staff.staff_id,
                "email": staff.email,
                "address": staff.address,
                "dob": staff.dob,
                "date_of_joining": staff.date_of_joining,
                "user_phone_number": staff.user.phone_number,
            }
        }

        return self.send_response(data)
