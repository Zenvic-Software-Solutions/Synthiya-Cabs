from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate, logout as django_logout
from apps.BASE.views import AppAPIView
from apps.ACCESS.models import User,Staff
from apps.ACCESS.serializers import UserSerializer,RegisterSerializer,StaffSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework import status




class RegisterView(AppAPIView):
    permission_classes = []
    authentication_classes =[]

    def get_jwt_token(self,user):
        refresh = RefreshToken.for_user(user)
        return {
            "access":str(refresh.access_token),
            "refresh":str(refresh),

        }
    def post(self,request):
        phone_number = request.data.get("phone_number")
        if User.objects.filter(phone_number=phone_number).exists():
            return self.send_error_response(
                data="Phone number alreaady exists"
            )
        serializer = RegisterSerializer(data= request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user.is_staff or user.is_driver:
                jwt_tokens = self.get_jwt_token(user)
                return self.send_response(
                    {
                        "phone_number":user.phone_number,
                        "token_type":"JWT",
                        **jwt_tokens,
                        "is_staff":user.is_staff,
                        "is_driver":user.is_driver,
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


class LoginView(AppAPIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            return self.send_error_response(data={"error": "Username and password are required."})

        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            data = {
                "user": user.username,
                "token": token.key
            }
            return self.send_response(data=data)
        return self.send_error_response(data={"error": "Invalid credentials"})


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




class StaffDetailView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        try:
            user = request.user
            staff = Staff.objects.get(user=user)
            serializer = StaffSerializer(staff = staff)
            return Response({
                serializer.data
            },status=status.HTTP_200_OK)
        except:
            return Response({
                serializer.errors
            },status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def put(self,request):
        pass


