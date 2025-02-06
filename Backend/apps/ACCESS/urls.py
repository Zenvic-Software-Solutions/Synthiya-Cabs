from django.urls import path
from apps.ACCESS.views import (
    RegisterView,
    LoginView,
    UserDetailView,
    ShopDetailView,
    CustomerDetailView,
    LogoutAPIView,
)
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    # User Registration
    path("register/", RegisterView.as_view(), name="register"),
    # New Access Token
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # User Login
    path("login/", LoginView.as_view(), name="login"),
    # User Logout
    path("logout/", LogoutAPIView.as_view(), name="logout"),
    # User Detail
    path("user-detail/", UserDetailView.as_view(), name="user-detail"),
    # Shop Detail
    path("shop-detail/", ShopDetailView.as_view(), name="shop-detail"),
    # Customer Detail
    path("customer-detail/", CustomerDetailView.as_view(), name="customer-detail"),
]
