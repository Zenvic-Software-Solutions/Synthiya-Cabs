from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models
from HELPERS.choices import CATEGORY_CHOICES

class Category(BaseModel):
    
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    account_type = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH)

    def __str__(self):
        return f"{self.category.capitalize()} - {self.account_type}"
    
class Ledger(BaseModel):
    name = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, unique=True)

    def __str__(self):
        return self.name
    


class SubLedger(BaseModel):
    ledger = models.ForeignKey(Ledger, on_delete=models.CASCADE, related_name="sub_ledgers")
    sub_ledger = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, unique=True)

    def __str__(self):
        return f"{self.ledger.name} - {self.sub_ledger}"

class Transaction(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="transactions")
    sub_ledger = models.ForeignKey(SubLedger, on_delete=models.CASCADE, related_name="transactions")
    description = models.TextField(**DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    amount = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"{self.category.category} - {self.sub_ledger.sub_ledger} - {self.amount}"

