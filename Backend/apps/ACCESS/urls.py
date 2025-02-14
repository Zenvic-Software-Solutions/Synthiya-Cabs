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
    CustomerCreateAPIView,
    DriverUpdateAPIView,
    DriverRetrieveAPIView,
    StaffUpdateAPIView,
    StaffRetrieveAPIView,
    CustomerUpdateAPIView,
    CustomerRetrieveAPIView,
    CustomerListAPIView,
    CustomerTripAPIView,
)

from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter, SimpleRouter
from apps.ACCESS.views.system import system_status_view



app_name = "access"
API_URL_PREFIX = "api/"


router = SimpleRouter()
router.register("user/list", UserListAPIView)
router.register("staff/list", StaffListAPIView)
router.register("customer/list", CustomerListAPIView)
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
    path("driver/cud/", DriverCUDPAPIView.as_view(), name="driver-create"),
    path("driver/update/<uuid>/", DriverUpdateAPIView.as_view(), name="driver-update"),
    path(
        "driver/retrieve/<uuid>/",
        DriverRetrieveAPIView.as_view(),
        name="driver-retrieve",
    ),
    path("staff/update/<uuid>/", StaffUpdateAPIView.as_view(), name="staff-update"),
    path(
        "staff/retrieve/<uuid>/", StaffRetrieveAPIView.as_view(), name="staff-retrieve"
    ),
    path(
        "customer/update/<uuid>/",
        CustomerUpdateAPIView.as_view(),
        name="customer-update",
    ),
    path(
        "customer/trip/<uuid>/",
        CustomerTripAPIView.as_view({'get','list'}),
        name="customer-trip",
    ),
    path(
        "customer/retrieve/<uuid>/",
        CustomerRetrieveAPIView.as_view(),
        name="customer-retrieve",
    ),
    path("customer/create/", CustomerCreateAPIView.as_view(), name="customer"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    path('system-status/', system_status_view, name='system_status'),
] + router.urls
