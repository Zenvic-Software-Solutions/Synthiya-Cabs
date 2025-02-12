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
)
from .customer import (
    UserListAPIView,
    CustomerCreateAPIView,
    CustomerUpdateAPIView,
)

from .driver import (
    DriverListAPIView,
    DriverCUDPAPIView,
    DriverUpdateAPIView,
    DriverRetrieveAPIView,
)
