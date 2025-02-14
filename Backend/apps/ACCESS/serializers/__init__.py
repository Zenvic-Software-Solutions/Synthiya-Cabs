from .user import (
    UserSerializer,
    RegisterSerializer,
    LoginSerializer,
    StaffSerializer,
    DriverSerializer,
    UserReadSerializer,
)

from .driver import (
    DriverReadSerializer,
    DriverBookingReadSerializer,
)
from .staff import (
    StaffWriteSerializer,
    StaffReadSerializer,
)

from .customer import CustomerReadSerializer, CustomerBookingReadSerializer
