from django.core.exceptions import (
    MultipleObjectsReturned,
    ObjectDoesNotExist,
    ValidationError,
)
from django.db.models import QuerySet
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):

    def _create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError("The given username must be set")
        
        # Normalizes username by lowercasing the email by default.
        username = self.model.normalize_username(username)  
        user = self.model(username=username, **extra_fields)
        
        if password:
            user.set_password(password)
        else:
            raise ValueError("Password cannot be None")

        user.save(using=self._db)
        return user

    def create_user(self, username, password=None, **extra_fields):
        # extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password=None, **extra_fields):
        # extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # if extra_fields.get("is_staff") is not True:
        #     raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(username, password, **extra_fields)

    def get_or_none(self, *args, **kwargs):
        """
        Returns an object or None if an exception occurs.
        """
        try:
            return self.get(*args, **kwargs)
        except (ObjectDoesNotExist, MultipleObjectsReturned, ValidationError):
            return None
        



class BaseObjectManagerQuerySet(QuerySet):

    def get_or_none(self, *args, **kwargs):


        try:
            return self.get(*args, **kwargs)
        
        except (
            ObjectDoesNotExist,
            AttributeError,
            ValueError,
            MultipleObjectsReturned,
            ValidationError,
        ):
            return None
