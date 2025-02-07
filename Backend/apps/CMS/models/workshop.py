from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models

class Workshop(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    owner_name = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    phone = models.CharField(max_length=15, unique=True)
    address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    balance = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    description = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    specialist = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)

    def __str__(self):
        return f"{self.identity} - {self.owner_name}"
