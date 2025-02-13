from apps.BASE.models import (
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
    MAX_CHAR_FIELD_LENGTH,
    BaseModel,
)
from django.db import models
from apps.CMS.models import Vehicle

class Finance(BaseModel):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name="finances")
    finance_name = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)
    finance_address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    contact_number = models.CharField(max_length=15)
    total_amount = models.DecimalField(max_digits=15, decimal_places=2)
    total_no_due = models.IntegerField()
    due_date = models.DateField()
    due_amount = models.DecimalField(max_digits=15, decimal_places=2)
    initiated_date = models.DateField()

    def __str__(self):
        return f"{self.finance_name} - {self.vehicle.vehicle_no}"
    
class FinanceHistory(BaseModel):
    finance = models.ForeignKey(Finance, on_delete=models.CASCADE, related_name="history")
    due_month = models.DateField()
    paid_date = models.DateField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    amount = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"{self.finance.finance_name} - {self.due_month} - {self.amount}"

