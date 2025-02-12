from HELPERS.choices import ROLE
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet, AppAPIView
from apps.ACCESS.models import Staff, User, Driver
from apps.ACCESS.serializers import (
    StaffReadSerializer,
    DriverReadSerializer,
    UserReadSerializer,
    StaffWriteSerializer,
)
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


# class StaffCUDAPIView(AppCUDAPIViewSet):
#     queryset = Staff.objects.all()
#     serializer_class = StaffWriteSerializer
#     def create(self, request, *args, **kwargs):
#         user_id = request.data.get("user")

#         if not user_id:
#             return self.send_error_response({"error": "User ID is required"})


#         try:
#             user = User.objects.get(id=user_id)
#         except User.DoesNotExist:
#             return self.send_error_response({"error": "User not found"})
#         if Staff.objects.filter(user=user).exists():
#             return self.send_error_response({"error": "Staff  already exists "})

#         return super().create(request, *args, **kwargs)


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
        return self.send_response({"message":"Driver Created Successfully"})
    

class DriverUpdateAPIView(AppAPIView):
    def put(self,request,*args,**kwargs):
        identity = request.data.get("identity")
        driver_id = request.data.get("driver_id")
        email = request.data.get("email")
        address = request.data.get("address")
        license_no =request.data.get("license_no")
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        dob = request.data.get("dob")
        date_of_joining = request.data.get("date_of_joining")

        user = User.objects.get(phone_number=phone_number)

        if Driver.objects.filter(user = user).exists():
            return self.send_error_response({"error":"Phone Number already exists"})
        Driver.objects.create(identity = identity,
                              driver_id = driver_id,
                              email=email,
                              address = address,license_no=license_no,phone_number=phone_number,password=password,
                              dob=dob,date_of_joining=date_of_joining)
        return self.send_response({"message":"Driver Updated Successfully"})
        




        
        

    

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


class UserListAPIView(AppListAPIViewSet):
    filterset_fields = ["role"]
    search_fields = ["phone_number"]

    queryset = User.objects.all()
    serializer_class = UserReadSerializer

    column_details = {
        "phone_number": "Phone Number",
        "role": "Role",
    }

    filter_details = {"role": "Role"}

    def get_table_meta(self):
        data = {
            "columns": self.column_details,
            "filters": self.filter_details,
            "filter_data": {"role": self.serialize_choices(ROLE["options"])},
        }
        return data
