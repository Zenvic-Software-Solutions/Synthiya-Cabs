from django.contrib.auth.backends import BaseBackend
from apps.ACCESS.models import User

from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import User


class PhoneNumberAuthBackend(BaseBackend):
    def authenticate(self, request, phone_number=None, password=None, **kwargs):
        try:
            user = User.objects.get(phone_number=phone_number)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
