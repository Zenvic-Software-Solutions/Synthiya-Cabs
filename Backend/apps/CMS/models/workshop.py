from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from apps.ACCESS.models import Driver
from apps.CMS.models import Vechile
from HELPERS.choices import STATUS_CHOICES
from apps.BASE.model_fields import AppSingleChoiceField

class Workshop(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    owner_name = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    phone = models.CharField(max_length=15)
    address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    balance = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    description = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    specialist = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)

    def __str__(self):
        return f"{self.identity} - {self.owner_name}"

class Maintenance(BaseModel):
    workshop = models.ForeignKey(Workshop, on_delete=models.CASCADE, related_name="maintenances")
    vechile = models.ForeignKey(Vechile, on_delete=models.CASCADE, related_name="maintenances")
    driver = models.ForeignKey(Driver, on_delete=models.SET_NULL, related_name="maintenances", null=True, blank=True)

    description = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    
    start_km = models.DecimalField(max_digits=10, decimal_places=2)
    end_km = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

   
    status= AppSingleChoiceField(STATUS_CHOICES)

    def __str__(self):
        return f"{self.vechile} - {self.status}"