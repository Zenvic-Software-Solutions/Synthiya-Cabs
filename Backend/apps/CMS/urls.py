from rest_framework.routers import SimpleRouter
from django.urls import path
from apps.BASE.views.generic import get_upload_api_view

# Bulk-Upload-Files
from HELPERS import (
    BulkFileUploadView,
    ActiveStatusChange,
    ArchieveStatusChange,
)

from apps.CMS.views import (
    OtherCabsListViewSet,
    OtherCabsCUDViewSet,
    OtherCabDetailViewSet,
    OtherDriverListViewSet,
    OtherDriverCUDViewSet,
    OtherVehicleListViewSet,
    OtherVehicleCUDViewSet,
    VehicleListViewSet,
    VehicleCUDViewSet,
    VechileDetailViewSet,
    BankListViewSet,
    BankCUDViewSet,
    BankDetailViewSet,
    BankBalanceListViewSet,
    BankBalanceCUDViewSet,
    WorkshopListViewSet,
    WorkshopCUDViewSet,
    WorkshopDetailAPIView,
    MaintenanceListViewSet,
    MaintenanceCUDViewSet,
    MaintenanceDetailAPIView,
    BookingListAPIView,
    BookingCUDAPIView,
    BookingDetailViewSet,
    BookingView,
    TripListAPIView,
    TripCUDAPIView,
    TripDetailViewSet,
    BettaListAPIView,
    BettaCUDAPIView,
    BettaDetailAPIView,
)

app_name = "cms"
API_URL_PREFIX = "api/"

router = SimpleRouter()


# Other Cabs
router.register(r"othercab/list", OtherCabsListViewSet, basename="other-cabs-list")
router.register(r"othercab/cud", OtherCabsCUDViewSet, basename="other-cabs-cud")

# Other Drivers
# router.register(r'otherdriver/list', OtherDriverListViewSet, basename='other-drivers-list')
router.register(r"otherdriver/cud", OtherDriverCUDViewSet, basename="other-drivers-cud")

# Other Vehicles
# router.register(r'othervehicle/list', OtherVehicleListViewSet, basename='other-vehicles-list')
router.register(
    r"othervehicle/cud", OtherVehicleCUDViewSet, basename="other-vehicles-cud"
)

# Vehicle
router.register(r"vehicle/list", VehicleListViewSet, basename="vehicles-list")
router.register(r"vehicle/cud", VehicleCUDViewSet, basename="vehicles-cud")
# Booking
router.register(r"booking/list", BookingListAPIView, basename="booking-list")
router.register(r"booking/cud", BookingCUDAPIView, basename="booking-cud")

# Bank
router.register(r"bank/list", BankListViewSet, basename="banks-list")
router.register(r"bank/cud", BankCUDViewSet, basename="banks-cud")
router.register(
    r"bankbalance/list", BankBalanceListViewSet, basename="bank-balance-list"
)
router.register(r"bankbalance/cud", BankBalanceCUDViewSet, basename="bank-balance-cud")

# Workshop
router.register(r"workshop/list", WorkshopListViewSet, basename="workshops-list")
router.register(r"workshop/cud", WorkshopCUDViewSet, basename="workshops-cud")
router.register(
    r"maintenance/list", MaintenanceListViewSet, basename="maintenance-list"
)
router.register(r"maintenance/cud", MaintenanceCUDViewSet, basename="maintenance-cud")

# Trip
router.register(r"trip/list", TripListAPIView, basename="trip-list")
router.register(r"trip/cud", TripCUDAPIView, basename="trip-cud")

# Betta
router.register(r"betta/list", BettaListAPIView, basename="betta-list")
router.register(r"betta/cud", BettaCUDAPIView, basename="betta-cud")

urlpatterns = [
    path(
        "otherdriver/list/<uuid>/",
        OtherDriverListViewSet.as_view({"get": "list"}),
        name="otherdriver-list",
    ),
    path(
        "otherdriver/list/<uuid>/table-meta/",
        OtherDriverListViewSet.as_view({"get": "get_table_meta"}),
        name="otherdriver-table-meta",
    ),
    path(
        "othervehicle/list/<uuid>/",
        OtherVehicleListViewSet.as_view({"get": "list"}),
        name="othervehicles-list",
    ),
    path(
        "betta/detail/<uuid>/",
        BettaDetailAPIView.as_view(),
        name="betta-list",
    ),
    path(
        "othervehicle/list/<uuid>/table-meta/",
        OtherVehicleListViewSet.as_view({"get": "get_table_meta"}),
        name="othervehicle-table-meta",
    ),
    # bulk upload images
    path(
        "property/files/bulk-upload/",
        BulkFileUploadView.as_view(),
        name="bulk-upload-images",
    ),
    # status change
    path("active/status/change/", ActiveStatusChange.as_view(), name="active-status"),
    path(
        "deleted/status/change/", ArchieveStatusChange.as_view(), name="delete-status"
    ),
    # Detail Views
    path(
        "othercab/detail/<uuid>/",
        OtherCabDetailViewSet.as_view(),
        name="othercab-detail-view",
    ),
    path(
        "vehicle/detail/<uuid>/", VechileDetailViewSet.as_view(), name="vehicle-details"
    ),
    path("bank/detail/<uuid>/", BankDetailViewSet.as_view(), name="bank-details"),
    path(
        "workshop/detail/<uuid>/",
        WorkshopDetailAPIView.as_view(),
        name="workshop-details",
    ),
    path(
        "maintenance/detail/<uuid>/",
        MaintenanceDetailAPIView.as_view(),
        name="maintenance-details",
    ),
    path("Trip/detail/<uuid>/", TripDetailViewSet.as_view(), name="trip-details"),
    path("booking/create/", BookingView.as_view(), name="booking-create"),
] + router.urls
