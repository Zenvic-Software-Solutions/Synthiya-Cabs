from .other_cabs import (
    OtherCabsListViewSet,
    OtherCabsCUDViewSet,
    OtherDriverListViewSet,
    OtherDriverCUDViewSet,
    OtherVehicleListViewSet,
    OtherVehicleCUDViewSet,
)
from .vehicle import VehicleListViewSet, VehicleCUDViewSet
from .bank import (
    BankListViewSet,
    BankCUDViewSet,
    BankBalanceListViewSet,
    BankBalanceCUDViewSet,
    BankDetailSerializer,
)
from .workshop import (
    WorkshopListViewSet,
    WorkshopCUDViewSet,
    MaintenanceListViewSet,
    MaintenanceCUDViewSet,
)
from .booking import BookingCUDAPIView, BookingListAPIView
from .trip import TripListAPIView, TripCUDAPIView
