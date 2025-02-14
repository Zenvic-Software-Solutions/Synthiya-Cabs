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
from .staff import (
    StaffListAPIView,
    StaffCUDAPIView,
    StaffRetrieveAPIView,
    StaffUpdateAPIView,
)
from .customer import (
    UserListAPIView,
    CustomerCreateAPIView,
    CustomerUpdateAPIView,
    CustomerRetrieveAPIView,
    CustomerListAPIView,
    CustomerTripAPIView
)

from .driver import (
    DriverListAPIView,
    DriverCUDPAPIView,
    DriverUpdateAPIView,
    DriverRetrieveAPIView,
    DriverTripApiView,
)
