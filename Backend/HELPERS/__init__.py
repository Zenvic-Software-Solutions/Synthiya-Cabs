from .choices import (
    ROLE,
    VEHICLE_TYPE
)
from .helperfunctions import time_since, get_city_by_pincode
from .bulkupload import BulkFileUploadView
from .status_change import ActiveStatusChange, ArchieveStatusChange
from .gold_price import fetch_prices, GoldRate, LastMonthRates
