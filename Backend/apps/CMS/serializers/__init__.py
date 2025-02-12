from .other_cabs import (
    OtherCabListSerializer,
    OtherCabWriteSerializer,
    OtherCabDetailSerializer,
    OtherDriverReadserializer,
    OtherDriverWriteSerializer,
    OtherVehicleReadserializer,
    OtherVehicleWriteSerializer,
)
from .vehicle import (
    VehicleReadSerializer,
    VehicleWriteSerializer,
    VehicleDetailSerializer,
)
from .bank import (
    BankReadSerializer,
    BankWriteSerializer,
    BankDetailSerializer,
    BankBalanceReadSerializer,
    BankBalanceWriteSerializer,
)
from .workshop import (
    WorkshopReadSerializer,
    WorkshopWriteSerializer,
    WorkshopDetailSerializer,
    MaintenanceReadSerializer,
    MaintenanceWriteSerializer,
    MaintenanceDetailSerializer,
)
from .booking import (
    BookingReadSerializer,
    BookingWriteSerializer,
    BookingRDetailSerializer,
)
from .betta import BettaReadSerializer, BettaWriteSerializer
from .transaction import (
    TransactionListSerializer,
    TransactionWriteSerializer,
    LedgerListSerializer,
    SubLedgerListSerializer,
    CategoryListSerializer,
)
from .trip import TripReadSerializer, TripWriteSerializer, TripDetailSerializer
