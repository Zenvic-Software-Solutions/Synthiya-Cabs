from .user import (
    LoginView,
    LogoutView,
    GetAuthUserDetails,
    RegisterView,
    ForgetPasswordAPIView,
    ChangePhoneNumberAPIView,
    StaffDetailView,
    UserDetailView,
    DriverDetailView,
)
from .staff_list import (
    StaffListAPIView,
    DriverListAPIView,
    UserListAPIView,
    StaffCUDAPIView,
    DriverCUDPAPIView,
    DriverUpdateAPIView,
    DriverRetrieveAPIView,
    CustomerCreateAPIView,
)
