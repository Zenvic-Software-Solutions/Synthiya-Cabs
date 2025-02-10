from apps.BASE.models import BaseModel,DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
from django.db import models
from apps.ACCESS.models import Customer
from apps.CMS.models import Vechile


class Trip(BaseModel):
    customer =models.ForeignKey(Customer,on_delete=models.CASCADE,**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    vechile = models.ForeignKey(Vechile,on_delete=models.CASCADE,**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    start_km = models.DecimalField(max_digits=10,decimal_places=2,**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    end_km = models.DecimalField(max_digits=10,decimal_places=2,**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    description = models.TextField()

    def __str__(self):
        return f"{self.customer.identity} {self.vechile.identity}"
    
