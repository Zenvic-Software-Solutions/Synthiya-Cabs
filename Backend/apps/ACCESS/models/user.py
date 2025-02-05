from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    Group,
    Permission,
)
from django.db import models
from apps.BASE.models import BaseModel
from apps.BASE.managers import UserManager
from apps.BASE.models import MAX_CHAR_FIELD_LENGTH, DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
from apps.BASE.model_fields import SingleChoiceField
from HELPERS import KYC


class User(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(max_length=255, unique=True, blank=True, null=True)
    phone_number = models.CharField(max_length=10, unique=True)
    is_staff = models.BooleanField(default=False)
    is_shop = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name="user_set",
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="user_user_permissions",
        blank=True,
    )

    objects = UserManager()

    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []

    # def __str__(self):
    #     return self.email or self.phone_number

    # class Meta:
    #     verbose_name = _("User")
    #     verbose_name_plural = _("Users")


class Shop(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    # term_condition = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    # privacy_policy = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    gold_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    silver_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True
    )
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    district = models.CharField(max_length=255, blank=True, null=True)
    pincode = models.CharField(max_length=6, blank=True, null=True)
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="managed_shop",
        limit_choices_to={"is_shop": True},
    )

    def __str__(self):
        return f"Manager of {self.identity}"

    # class Meta:
    #     verbose_name = _("Shop")
    #     verbose_name_plural = _("Shop")


class Customer(BaseModel):
    identity = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    district = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=255, blank=True, null=True)
    pincode = models.CharField(max_length=6, blank=True, null=True)
    kyc_option = SingleChoiceField(KYC)
    kyc_number = models.CharField(
        max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG
    )

    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name="customers")
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="customer_user",
        limit_choices_to={"is_customer": True},
        null=True,
        blank=True,
    )

    # def __str__(self):
    #     return f"{self.user.phone_number} - {self.shop.identity}"

    # class Meta:
    #     verbose_name = _("Customer")
    #     verbose_name_plural = _("Customers")
