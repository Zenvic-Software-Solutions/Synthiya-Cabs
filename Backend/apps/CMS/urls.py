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
    OtherDriverListViewSet,
    OtherDriverCUDViewSet,
    OtherVechileListViewSet,
    OtherVechileCUDViewSet,
    VechileListViewSet,
    VechileCUDViewSet,
    BankListViewSet,
    BankCUDViewSet,
    BankBalanceListViewSet,
    BankBalanceCUDViewSet,
    WorkshopListViewSet,
    WorkshopCUDViewSet,
    MaintenanceListViewSet,
    MaintenanceCUDViewSet,
    BookingListAPIView,
    BookingCUDAPIView,
    TripListAPIView,
    TripCUDAPIView,

)

app_name = "cms"
API_URL_PREFIX = "api/"

router = SimpleRouter()


# Other Cabs
router.register(r'othercab/list', OtherCabsListViewSet, basename='other-cabs-list')
router.register(r'othercab/cud', OtherCabsCUDViewSet, basename='other-cabs-cud')
# Trip
router.register(r'trip/list', TripListAPIView, basename='trip-list')
router.register(r'trip/cud', TripCUDAPIView, basename='trip-cud')

# Other Drivers
router.register(r'otherdriver/list', OtherDriverListViewSet, basename='other-drivers-list')
router.register(r'otherdriver/cud', OtherDriverCUDViewSet, basename='other-drivers-cud')

# Other Vehicles
router.register(r'othervechile/list', OtherVechileListViewSet, basename='other-vechiles-list')
router.register(r'othervechile/cud', OtherVechileCUDViewSet, basename='other-vechiles-cud')

# Vechile
router.register(r'vechile/list', VechileListViewSet, basename='vechiles-list')
router.register(r'vechile/cud', VechileCUDViewSet, basename='vechiles-cud')
# Booking
router.register(r'booking/list', BookingListAPIView, basename='booking-list')
router.register(r'booking/cud', BookingCUDAPIView, basename='booking-cud')

# Bank
router.register(r'bank/list', BankListViewSet, basename='banks-list')
router.register(r'bank/cud', BankCUDViewSet, basename='banks-list')
router.register(r'bankbalance/list', BankBalanceListViewSet, basename='bank-balance-list')
router.register(r'bankbalance/cud', BankBalanceCUDViewSet, basename='bank-balance-cud')

# Workshop
router.register(r'workshop/list', WorkshopListViewSet, basename='workshops-list')
router.register(r'workshop/cud', WorkshopCUDViewSet, basename='workshops-cud')
router.register(r'maintenance/list', MaintenanceListViewSet, basename='maintenance-list')
router.register(r'maintenance/cud', MaintenanceCUDViewSet, basename='maintenance-cud')



urlpatterns = [
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
    
] + router.urls
