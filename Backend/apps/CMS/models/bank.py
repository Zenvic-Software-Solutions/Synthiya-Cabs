from apps.BASE.models import DEFAULT_BLANK_NULLABLE_FIELD_CONFIG, MAX_CHAR_FIELD_LENGTH, BaseModel
from django.db import models


class Bank(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    branch = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    account_no = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, unique=True)
    account_holder_name = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    ifsc_code = models.CharField(max_length=20, **DEFAULT_BLANK_NULLABLE_FIELD_CONFIG)
    

    def __str__(self):
        return f"{self.identity} - {self.branch} ({self.account_no})"
    
class BankBalance(BaseModel):
    bank = models.ForeignKey(Bank, on_delete=models.CASCADE, related_name="balances")
    date = models.DateField(auto_now_add=True)
    balance = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"{self.bank.identity} - {self.date} : ₹{self.balance}"
