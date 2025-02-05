from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from apps.ACCESS.models import User, Shop, Customer


class UserSerializer(serializers.ModelSerializer):
    related_entity = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "uuid",
            "email",
            "phone_number",
            "is_staff",
            "is_shop",
            "is_customer",
            "related_entity",
        ]

    def get_related_entity(self, obj):
        try:
            if obj.is_staff:
                shop = Shop.objects.get(user=obj)
                return {"id": shop.id, "uuid": shop.uuid}
            elif obj.is_customer:
                customer = Customer.objects.get(user=obj)
                return {"id": customer.id, "uuid": customer.uuid}
        except (Shop.DoesNotExist, Customer.DoesNotExist):
            return None


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "phone_number", "password", "is_shop", "is_customer"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            phone_number=validated_data["phone_number"],
            email=validated_data.get("email", None),
            password=validated_data["password"],
            is_shop=validated_data.get("is_shop", False),
            is_customer=validated_data.get("is_customer", False),
        )
        # Automatically create an auth token for the user
        Token.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            # Ensure the user has a token
            token, _ = Token.objects.get_or_create(user=user)
            return {
                "phone_number": user.phone_number,
                "token": token.key,
            }
        raise serializers.ValidationError("Invalid credentials")


class ShopSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Shop
        fields = [
            "id",
            "uuid",
            "identity",
            "address",
            "city",
            "district",
            "pincode",
            "gold_price",
            "silver_price",
            #   "terms_and_condition",
            #   "privacy_policy",
            "user",
        ]


class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Customer
        fields = [
            "id",
            "shop",
            "identity",
            "address",
            "city",
            "district",
            "pincode",
            "user",
            "kyc_option",
            "kyc_number",
        ]
