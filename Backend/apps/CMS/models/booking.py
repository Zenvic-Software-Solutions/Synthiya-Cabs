from apps.BASE.models import (
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
    MAX_CHAR_FIELD_LENGTH,
    BaseModel,
)
from django.db import models
from apps.CMS.models import Vehicle, OtherCab, OtherDriver
from apps.ACCESS.models import Customer, Driver
from HELPERS.choices import RENT_TYPE_CHOICES


class Booking(BaseModel):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name="bookings"
    )
    vehicle = models.ForeignKey(
        Vehicle, on_delete=models.CASCADE, related_name="bookings"
    )
    cab = models.ForeignKey(
        OtherCab,
        on_delete=models.CASCADE,
        related_name="bookings",
        null=True,
        blank=True,
    )
    driver = models.ForeignKey(
        Driver, on_delete=models.CASCADE, related_name="bookings", null=True, blank=True
    )
    otherDriver = models.ForeignKey(
        OtherDriver,
        on_delete=models.CASCADE,
        related_name="bookings",
        null=True,
        blank=True,
    )
    start_date = models.DateField()
    end_date = models.DateField()
    start_place = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)
    end_place = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)
    # rent_type = models.CharField(max_length=20, choices=RENT_TYPE_CHOICES)
    no_of_days = models.IntegerField()
    rent_amount = models.DecimalField(max_digits=15, decimal_places=2)
    advance = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    sponsor = models.ForeignKey(
        Customer,
        on_delete=models.SET_NULL,
        related_name="sponsored_bookings",
        null=True,
        blank=True,
    )

    def __str__(self):
        return f"Booking {self.customer} ({self.start_date} to {self.end_date})"
