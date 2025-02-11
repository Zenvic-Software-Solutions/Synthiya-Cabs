from .other_cabs import (
    OtherCabsListViewSet,
    OtherCabsCUDViewSet,
    OTherCabDetailViewSet,
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
    BankDetailViewSet,
)
from .workshop import (
    WorkshopListViewSet,
    WorkshopCUDViewSet,
    MaintenanceListViewSet,
    MaintenanceCUDViewSet,
)
from .booking import BookingCUDAPIView, BookingListAPIView, BankDetailViewSet
from .trip import TripListAPIView, TripCUDAPIView, TripDetailViewSet
