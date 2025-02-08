from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from apps.ACCESS.models import Driver

class Betta(BaseModel):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE, related_name="bettas")
    booking = models.ForeignKey("CMS.Booking", on_delete=models.CASCADE, related_name="bettas")
    
    amount = models.DecimalField(max_digits=15, decimal_places=2)
    
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("paid", "Paid"),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")
    
    paid_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.driver} - {self.amount} ({self.status})"
