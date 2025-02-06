from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from apps.ACCESS.models import User, Shop, Customer
from apps.ACCESS.serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    ShopSerializer,
    CustomerSerializer,
)
from apps.BASE.views import AppAPIView


class RegisterView(AppAPIView):
    permission_classes = []
    authentication_classes = []

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user)
            return self.send_response(
                data={
                    "data": UserSerializer(user).data,
                    "token": token.key,
                }
            )
        return self.send_error_response()


from rest_framework_simplejwt.tokens import RefreshToken


class LoginView(AppAPIView):
    permission_classes = []
    authentication_classes = []

    def get_jwt_token(self, user):
        """Generate JWT tokens using SimpleJWT."""
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            phone_number = serializer.validated_data["phone_number"]
            user = User.objects.get(phone_number=phone_number)

            if not user.is_active:
                return Response(
                    {"error": "Account is disabled."}, status=status.HTTP_403_FORBIDDEN
                )

            if user.is_staff or user.is_shop:
                jwt_tokens = self.get_jwt_token(user)
                return self.send_response(
                    {
                        "phone_number": user.phone_number,
                        "token_type": "JWT",
                        **jwt_tokens,
                        "is_staff": user.is_staff,
                        "is_shop": user.is_shop,
                        "is_customer": user.is_customer,
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


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        data = {"data": serializer.data}
        return Response(data)

    def put(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShopDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            shop = Shop.objects.get(user=request.user)
            serializer = ShopSerializer(shop)
            return Response(serializer.data)
        except Shop.DoesNotExist:
            return Response(
                {"error": "Shop not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request):
        try:
            shop = Shop.objects.get(user=request.user)
            serializer = ShopSerializer(shop, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Shop.DoesNotExist:
            return Response(
                {"error": "Shop not found"}, status=status.HTTP_404_NOT_FOUND
            )


class CustomerDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            customer = Customer.objects.get(user=request.user)
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        except Customer.DoesNotExist:
            return Response(
                {"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request):
        try:
            customer = Customer.objects.get(user=request.user)
            serializer = CustomerSerializer(customer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Customer.DoesNotExist:
            return Response(
                {"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND
            )


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import logout


class LogoutAPIView(AppAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        # refresh_token = request.data.get("refresh")
        # if refresh_token:
        #     try:
        #         token = RefreshToken(refresh_token)
        #         token.blacklist()
        #     except Exception as e:
        #         return self.send_error_response()

        try:
            token = Token.objects.get(user=user)
            token.delete()
        except Token.DoesNotExist:
            pass

        logout(request)

        return self.send_response(data={"message": "Successfully logged out"})
