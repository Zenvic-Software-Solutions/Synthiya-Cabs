from apps.BASE.model_fields import AppSingleChoiceField
from apps.BASE.models import (
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
    MAX_CHAR_FIELD_LENGTH,
    BaseModel,
)
from django.db import models
from HELPERS.choices import VEHICLE_TYPE


class OtherCab(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    owner_name = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    phone_number = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    balance = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )

    def __str__(self):
        return f"{self.identity} {self.owner_name}"


class OtherDriver(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    other_cab_name = models.ForeignKey(
        OtherCab, on_delete=models.CASCADE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    phone_number = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )

    def __str__(self):
        return f"{self.identity} {self.other_cab_name.identity}"


class OtherVehicle(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    vehicle_type = AppSingleChoiceField(
        VEHICLE_TYPE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    vehicle_no = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    other_cab_name = models.ForeignKey(
        OtherCab, on_delete=models.CASCADE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    is_ac_available = models.BooleanField(default=False)
    # last_km = models.DecimalField(max_digits=10,decimal_places=2,default=0.00)

    def __str__(self):
        return f"{self.vehicle_no}"
