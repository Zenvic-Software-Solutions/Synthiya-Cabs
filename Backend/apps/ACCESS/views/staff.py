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
    def put(self, request, *args, **kwargs):
        pass
