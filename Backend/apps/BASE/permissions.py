from rest_framework import permissions

class NoAuthenticatedAPIMixin:
    permission_classes = []

class NonAuthenticatedAPIMixin:
    permission_classes = [permissions.AllowAny]
class AuthenticatedAPIMixin:
    permission_classes = [permissions.IsAuthenticated]