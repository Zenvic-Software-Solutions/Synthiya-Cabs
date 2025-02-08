from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from apps.BASE.model_fields import AppSingleChoiceField
from HELPERS.choices import VEHICLE_TYPE

class Vechile(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    vechile_type = AppSingleChoiceField(VEHICLE_TYPE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    vechile_no = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    is_ac_available = models.BooleanField(default=False)
    last_km = models.DecimalField(max_digits=10,decimal_places=2,**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)

    def __str__(self):
        return f"{self.identity} ({self.vechile_no})"
