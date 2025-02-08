from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from apps.ACCESS.models import Driver
from apps.CMS.models import Booking,Betta
from HELPERS.choices import PAYMENT_TYPE_CHOICES

class Payment(BaseModel):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name="payments")
    driver_betta = models.ForeignKey(Betta, on_delete=models.CASCADE, related_name="payments", null=True, blank=True)
    
    halting_charge = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    hills_charge = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    permit = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    commission = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
    total_amount = models.DecimalField(max_digits=15, decimal_places=2)
    gst = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    deduction = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    advance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    paid_amount = models.DecimalField(max_digits=15, decimal_places=2)
    balance = models.DecimalField(max_digits=15, decimal_places=2)

    other_details = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    is_sponsor = models.BooleanField(default=False)

    # payment_type = models.CharField(max_length=10, choices=PAYMENT_TYPE_CHOICES, default="cash")

    def __str__(self):
        return f"Payment for Booking {self.booking.id} - {self.payment_type}"
