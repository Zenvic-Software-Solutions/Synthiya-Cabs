from apps.BASE.models import (
    DEFAULT_BLANK_NULLABLE_FIELD_CONFIG,
    MAX_CHAR_FIELD_LENGTH,
    BaseModel,
)
from django.db import models


class Branch(BaseModel):
    identity = models.CharField(max_length=MAX_CHAR_FIELD_LENGTH, unique=True)

    def __str__(self):
        return self.identity
