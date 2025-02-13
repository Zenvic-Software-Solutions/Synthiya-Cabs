from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    Group,
    Permission,
)
from django.db import models
from HELPERS.choices import ROLE
from apps.BASE.managers import UserManager
from apps.BASE.model_fields import AppSingleChoiceField
from apps.BASE.models import (
    BaseModel,
    MAX_CHAR_FIELD_LENGTH,
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
)


# Custom User Model
class User(BaseModel, AbstractBaseUser, PermissionsMixin):
    phone_number = models.CharField(
        max_length=150, unique=True, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )

    role = AppSingleChoiceField(
        ROLE,
    )
    is_staff = models.BooleanField(default=False)
    is_driver = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    # groups = models.ManyToManyField(
    #     Group,
    #     related_name="user_set",
    #     blank=True,
    # )
    # user_permissions = models.ManyToManyField(
    #     Permission,
    #     related_name="user_user_permissions",
    #     blank=True,
    # )

    objects = UserManager()

    USERNAME_FIELD = "phone_number"

    def __str__(self):
        return f"{self.phone_number} "


class Staff(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    staff_id = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    email = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    dob = models.DateField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    date_of_joining = models.DateField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )


class Driver(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    driver_id = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    address = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    email = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    dob = models.DateField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    date_of_joining = models.DateField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    license_no = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )


class Customer(BaseModel):
    
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    customer_id = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )

    
    def save(self, *args, **kwargs):
        if not self.invoice_id:
            last_invoice = Customer.objects.all().order_by("id").last()
            if last_invoice:
                last_invoice_id = last_invoice.invoice_id
                invoice_number = int(last_invoice_id.split("INV")[-1]) + 1
                self.invoice_id = f"INV{invoice_number:04d}"
            else:
                self.invoice_id = "INV0001"

        super(Customer, self).save(*args, **kwargs)
