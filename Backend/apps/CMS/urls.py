from rest_framework.routers import SimpleRouter
from django.urls import path
from apps.BASE.views.generic import get_upload_api_view


# Bulk-Upload-Files
from HELPERS import (
    BulkFileUploadView,
    ActiveStatusChange,
    ArchieveStatusChange,
    GoldRate,
    LastMonthRates,
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
)

app_name = "cms"
API_URL_PREFIX = "api/"

router = SimpleRouter()


# Other Cabs
router.register(r'other-cabs', OtherCabsListViewSet, basename='other-cabs-list')
router.register(r'other-cabs-cud', OtherCabsCUDViewSet, basename='other-cabs-cud')

# Other Drivers
router.register(r'other-drivers', OtherDriverListViewSet, basename='other-drivers-list')
router.register(r'other-drivers-cud', OtherDriverCUDViewSet, basename='other-drivers-cud')

# Other Vehicles
router.register(r'other-vechiles', OtherVechileListViewSet, basename='other-vechiles-list')
router.register(r'other-vechiles-cud', OtherVechileCUDViewSet, basename='other-vechiles-cud')

# Vehicle
router.register(r'vechiles', VechileListViewSet, basename='vechiles-list')
router.register(r'vechiles-cud', VechileCUDViewSet, basename='vechiles-cud')

# Bank
router.register(r'banks', BankListViewSet, basename='banks-list')
router.register(r'banks', BankCUDViewSet, basename='banks-list')
router.register(r'bank-balance', BankBalanceListViewSet, basename='bank-balance-list')
router.register(r'bank-balance-cud', BankBalanceCUDViewSet, basename='bank-balance-cud')

# Workshop
router.register(r'workshops', WorkshopListViewSet, basename='workshops-list')
router.register(r'workshops-cud', WorkshopCUDViewSet, basename='workshops-cud')



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
