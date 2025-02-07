from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from apps.BASE.model_fields import AppSingleChoiceField
from HELPERS.choices import VEHICLE_TYPE

class Vehicle(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    vehicle_type = AppSingleChoiceField(VEHICLE_TYPE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    vehicle_no = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    is_ac = models.BooleanField(default=False)
    last_km = models.DecimalField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)

    def __str__(self):
        return f"{self.identity} ({self.vehicle_no})"
