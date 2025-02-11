from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate, logout as django_logout
from apps.BASE.views import AppAPIView
from apps.ACCESS.models import User, Staff, Driver
from apps.ACCESS.serializers import (
    UserSerializer,
    RegisterSerializer,
    StaffSerializer,
    DriverSerializer,
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.views import TokenObtainPairView


class RegisterView(AppAPIView):
    permission_classes = []
    authentication_classes = []

    def get_jwt_token(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }

    def post(self, request):
        phone_number = request.data.get("phone_number")
        if User.objects.filter(phone_number=phone_number).exists():
            return self.send_error_response(data="Phone number alreaady exists")
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user.is_staff or user.is_driver:
                jwt_tokens = self.get_jwt_token(user)
                return self.send_response(
                    {
                        "phone_number": user.phone_number,
                        "token_type": "JWT",
                        **jwt_tokens,
                        "is_staff": user.is_staff,
                        "is_driver": user.is_driver,
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                token, _ = Token.objects.get_or_create(user=user)
                return self.send_response(
                    data={
                        "phone_number": user.phone_number,
                        "token_type": "Token",
                        "token": token.key,
                        "is_staff": user.is_staff,
                        "is_shop": user.is_shop,
                        "is_customer": user.is_customer,
                    }
                )
        return self.send_error_response()


class LoginView(TokenObtainPairView, AppAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            tokens = serializer.validated_data

            return self.send_response(
                data={
                    "message": "Login successful.",
                    "access": tokens.get("access"),
                    "refresh": tokens.get("refresh"),
                }
            )
        except Exception as e:
            return self.send_error_response(
                data={"detail": "Invalid phonenumber or password."}
            )


class LogoutView(AppAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = self.get_authenticated_user()
        if user:
            try:
                token = Token.objects.get(user=user)
                token.delete()
                django_logout(request)
                return self.send_response({"message": "Successfully logged out."})
            except Token.DoesNotExist:
                return self.send_error_response({"error": "No active session found."})
        return self.send_error_response({"error": "User not authenticated."})


class GetAuthUserDetails(AppAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = self.get_authenticated_user()
        if user:
            data = {
                "uuid": user.uuid,
                "name": f"{user.full_name}",
                "username": user.username,
            }
            return self.send_response(data=data)
        return self.send_error_response(data={"error": "User not authenticated."})


# class RegisterView(AppAPIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             token, _ = Token.objects.get_or_create(user=user)
#             return self.send_response(data={"token": token.key, "user": user.username})
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            serializer = UserSerializer(user)
            return Response({"data": {serializer.data}})
        except User.DoesNotExist:
            return Response({"data": {serializer.error}})

    def put(self, request):
        try:
            user = User.objects.get(request.data)
            serializer = UserSerializer(user)
            if serializer.is_valid:
                serializer.save()
                return Response({"data": {serializer.data}})
        except User.DoesNotExist:
            return Response({"data": {"error": "User Not Found"}})


class StaffDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            staff = Staff.objects.get(user=user)
            serializer = StaffSerializer(staff=staff)
            return Response({"data": {serializer.data}, status: status.HTTP_200_OK})
        except Staff.DoesNotExist:
            return Response({"data": {"error": "Staff Not Found"}})

    def put(self, request):
        try:
            staff = Staff.objects.get(user=request.user)
            serializer = StaffSerializer(staff, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"data": {serializer.data}})
            return Response({serializer.errors})
        except Staff.DoesNotExist:
            return Response({"data": {"error": "Staff Not Found"}})


class DriverDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            driver = Driver.objects.get(user=user)
            serializer = DriverSerializer(driver=driver)
            return Response({"data": {serializer.data}, status: status.HTTP_200_OK})
        except Staff.DoesNotExist:
            return Response({"data": {"error": "Driver Not Found"}})

    def put(self, request):
        try:
            driver = Driver.objects.get(user=request.user)
            serializer = DriverSerializer(driver, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"data": {serializer.data}})
            return Response({serializer.errors})
        except Driver.DoesNotExist:
            return Response({"data": {"error": "Driver Not Found"}})


class ChangePhoneNumberAPIView(AppAPIView):
    def post(self, request, *args, **kwargs):
        old_phone_number = request.data.get("old_phone_number")
        new_phone_number = request.data.get("new_phone_number")

        if not old_phone_number and not new_phone_number:
            return self.send_error_response({"error": " Phone Number is required"})
        if User.objects.filter(phone_number=new_phone_number).exists():
            return self.send_error_response({"error": "Phone number already exists"})

        try:
            user = User.objects.get(phone_number=new_phone_number)
            user.phone_number = new_phone_number
            user.save()
            return self.send_response({"message": "New Phone Number successfully"})

        except User.DoesNotExist:
            return self.send_error_response({"error": "Invalid "})


class ForgetPasswordAPIView(AppAPIView):
    def post(self, request, *args, **kwargs):
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        if not phone_number and not password:
            return self.send_error_response(
                {"error": "Phone no and password is required"}
            )
        try:
            user = User.objects.get(phone_number=phone_number)
            user.phone_number = make_password(password)
            user.save()
        except:
            return self.send_error_response({"error": "User not found "})
