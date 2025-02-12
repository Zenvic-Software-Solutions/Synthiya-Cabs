from django.db import models
from django.core.exceptions import ValidationError
from apps.BASE.models import (
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
    MAX_CHAR_FIELD_LENGTH,
    BaseModel,
)
from apps.CMS.models import Vehicle, OtherCab, OtherDriver
from apps.ACCESS.models import Customer, Driver
from HELPERS.choices import RENT_TYPE_CHOICES, PAYMENT_TYPE_CHOICES
from apps.BASE.model_fields import AppSingleChoiceField


class Booking(BaseModel):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="customer_bookings"
    )
    vehicle = models.ForeignKey(
        Vehicle, on_delete=models.CASCADE, related_name="vehicle_bookings"
    )
    cab = models.ForeignKey(
        OtherCab,
        on_delete=models.CASCADE,
        related_name="cab_bookings",
        null=True,
        blank=True,
    )
    driver = models.ForeignKey(
        Driver,
        on_delete=models.CASCADE,
        related_name="driver_bookings",
        null=True,
        blank=True,
    )
    otherdriver = models.ForeignKey(
        OtherDriver,
        on_delete=models.CASCADE,
        related_name="other_driver_bookings",
        null=True,
        blank=True,
    )
    start_date = models.DateField()
    end_date = models.DateField()
    start_place = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)
    end_place = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)
    rent_type = AppSingleChoiceField(RENT_TYPE_CHOICES)

    # Automatically calculate the number of days
    @property
    def no_of_days(self):
        return (self.end_date - self.start_date).days

    sponsor = models.ForeignKey(
        Customer,
        on_delete=models.SET_NULL,
        related_name="sponsored_bookings",
        null=True,
        blank=True,
    )

    def clean(self):
        if self.start_date >= self.end_date:
            raise ValidationError({"end_date": "End date must be after start date."})

    def __str__(self):
        return f"Booking {self.customer} ({self.start_date} to {self.end_date})"


class Payment(BaseModel):
    booking = models.ForeignKey(
        Booking, on_delete=models.CASCADE, related_name="payments"
    )
    driver_betta = models.ForeignKey(
        "CMS.Betta",
        on_delete=models.CASCADE,
        related_name="betta_payments",
        null=True,
        blank=True,
    )

    halting_charge = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    hills_charge = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    permit = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    commission = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    total_amount = models.DecimalField(max_digits=15, decimal_places=2)
    gst = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    deduction = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    advance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    paid_amount = models.DecimalField(max_digits=15, decimal_places=2)

    # Automatically calculate balance
    @property
    def balance(self):
        return self.total_amount - self.paid_amount - self.deduction

    other_details = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    is_sponsor = models.BooleanField(default=False)

    payment_type = AppSingleChoiceField(PAYMENT_TYPE_CHOICES)

    def __str__(self):
        return f"Payment {self.id} for Booking {self.booking.id} ({self.payment_type}) - ₹{self.total_amount}"
