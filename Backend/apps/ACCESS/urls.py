from django.urls import path
from apps.ACCESS.views import (
    LoginView,
    LogoutView,
    RegisterView,
    GetAuthUserDetails,
    UserListAPIView,
    StaffListAPIView,
    DriverListAPIView,
    StaffDetailView,
    DriverDetailView,
    UserDetailView,
    ForgetPasswordAPIView,
    ChangePhoneNumberAPIView,
    StaffCUDAPIView,
    DriverCUDPAPIView,
    DriverUpdateAPIView,
)

from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter, SimpleRouter


app_name = "access"
API_URL_PREFIX = "api/"


router = SimpleRouter()
router.register("user/list", UserListAPIView)
router.register("staff/list", StaffListAPIView)
# router.register("staff/cud",StaffCUDAPIView)
router.register("driver/list", DriverListAPIView)

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("register/", RegisterView.as_view(), name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("user/details/", GetAuthUserDetails.as_view(), name="login"),
    path("forgot/password/", ForgetPasswordAPIView.as_view(), name="forget"),
    path("change/phone_number/", ChangePhoneNumberAPIView.as_view(), name="change"),
    path("user/view/", UserDetailView.as_view(), name="user"),
    path("staff/details/", StaffDetailView.as_view(), name="staff"),
    path("driver/details/", DriverDetailView.as_view(), name="driver"),
    path("staff/cud/", StaffCUDAPIView.as_view(), name="driver"),
    path("driver/cud/", DriverCUDPAPIView.as_view(), name="driver"),
    path("driver/update/", DriverUpdateAPIView.as_view(), name="driver"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
] + router.urls
