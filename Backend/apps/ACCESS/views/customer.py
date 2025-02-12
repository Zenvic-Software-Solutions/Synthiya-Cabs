from HELPERS.choices import ROLE
from apps.BASE.views import AppListAPIViewSet, AppCUDAPIViewSet, AppAPIView
from apps.ACCESS.models import Staff, User, Driver, Customer
from apps.ACCESS.serializers import (
    StaffReadSerializer,
    DriverReadSerializer,
    UserReadSerializer,
    StaffWriteSerializer,
)


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


class CustomerCreateAPIView(AppAPIView):
    def post(self, request, *args, **kwargs):
        identity = request.data.get("identity")
        customer_id = request.data.get("customer_id")
        phone_number = request.data.get("phone_number")

        if not phone_number:
            return self.send_error_response({"error": "Phone number is required"})

        # Get or create user
        user, created = User.objects.get_or_create(
            phone_number=phone_number, defaults={"password": "admin@123"}
        )

        # Check if a customer already exists for the user
        if Customer.objects.filter(user=user).exists():
            return self.send_error_response({"error": "Customer already exists"})

        # Create customer
        Customer.objects.create(identity=identity, customer_id=customer_id, user=user)

        return self.send_response({"message": "Customer created successfully"})


class CustomerUpdateAPIView(AppAPIView):
    def put(self, request, *args, **kwargs):
        uuid = request.data.get("uuid")
        if not uuid:
            return self.send_error_response({"error": "UUID is required for update"})

        identity = request.data.get("identity")
        customer_id = request.data.get("customer_id")
        phone_number = request.data.get("phone_number")

        try:
            customer = Customer.objects.get(uuid=uuid)
        except Customer.DoesNotExist:
            return self.send_error_response({"error": "Customer not found"})

        user = customer.user  # Retrieve the associated user

        # Update customer details (only if new values are provided)
        customer.identity = identity if identity else customer.identity
        customer.customer_id = customer_id if customer_id else customer.customer_id

        # Update user details (if phone number is provided)
        if phone_number:
            user.phone_number = phone_number
            user.save()

        customer.save()

        return self.send_response({"message": "Customer updated successfully"})


class CustomerRetrieveAPIView(AppAPIView):
    def get(self, request, uuid, *args, **kwargs):
        phone_number = request.GET.get("hone_number")
        password = request.GET.get("password")
        try:
            customer = Customer.objects.get(uuid=uuid)
        except Customer.DoesNotExist:
            return self.send_error_response({"error": "Customer not found"})

        try:
            user = User.objects.get(phone_number=phone_number, password=password)
        except User.DoesNotExist:
            return self.send_error_response({"error": "User not found"})

        data = {
            "identity": customer.identity,
            "customer_id": customer.customer_id,
            "user_phone_number": user.phone_number,
            "user_password": user.password,
        }

        return self.send_response(data)
