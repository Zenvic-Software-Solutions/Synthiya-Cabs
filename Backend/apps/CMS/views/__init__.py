from .other_cabs import (
    OtherCabsListViewSet,
    OtherCabsCUDViewSet,
    OtherCabDetailViewSet,
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
    MaintenanceDetailAPIView,
    WorkshopDetailAPIView,
)
from .booking import BookingCUDAPIView, BookingListAPIView, BookingDetailViewSet
from .trip import TripListAPIView, TripCUDAPIView, TripDetailViewSet
