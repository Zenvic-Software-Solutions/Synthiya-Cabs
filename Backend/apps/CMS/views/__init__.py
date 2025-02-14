from .other_cabs import (
    OtherCabsListViewSet,
    OtherCabsCUDViewSet,
    OtherCabDetailViewSet,
    OtherDriverListViewSet,
    OtherDriverCUDViewSet,
    OtherVehicleListViewSet,
    OtherVehicleCUDViewSet,
)
from .vehicle import VehicleListViewSet, VehicleCUDViewSet, VechileDetailViewSet
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
    VehicleMaintenanceAPIView,
)
from .booking import (
    BookingCUDAPIView,
    BookingListAPIView,
    BookingDetailViewSet,
    BookingView,
)
from .trip import TripListAPIView, TripCUDAPIView, TripDetailViewSet,VehicleTripAPIView
from .betta import BettaCUDAPIView, BettaDetailAPIView, BettaListAPIView
from .finance import (
    FinanaceListAPIView,
    FinanceCUDAPIView,
    FinanaceHistoryListAPIView,
    FinanceHistoryCUDAPIView,
    FinanceDetailAPIView,
    FinanceHistoryDetailAPIView,
    VehicleFinanceAPIView,
)
