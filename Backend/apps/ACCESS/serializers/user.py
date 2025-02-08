from rest_framework import serializers
from apps.ACCESS.models import User,Staff,Driver
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
class UserSerializer(serializers.ModelSerializer):
    related_entity = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id','uuid','username', 'full_name', 'is_staff','is_driver','is_customer','related_entity']
       

    def get_related_entity(self,obj):
        try:
            if obj.is_staff:
                staff =Staff.objects.get(user=obj)
                return {"id":staff.id,"uuid":staff.uuid,"identity":staff.identity}
            elif obj.is_driver:
                driver =Driver.objects.get(user=obj)
                return{"id":driver.id,"uuid":driver.uuid,"identity":driver.identity}
            
        except (Staff.DoesNotExist,Driver.DoesNotExist):
            return None
        
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "phone_number","password","role","is_staff","is_driver"
        ]

        extra_kwargs ={"password":{"write_only":True}}

    def create(self,validation_data):
        user = User.objects.create_user(
            phone_number = validation_data["phone_number"],
            password = validation_data["password"],
            is_staff=validation_data.get("is_staff",False),
            is_driver =validation_data.get("is_driver",False)
        )
        Token.objects.create(user = user)
        return user
    
class LoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    password = serializers.CharField(write_only = True)

    def validate(self, data):
        user =authenticate(**data)
        if user and user.is_active:
            token,_ = Token.objects.get_or_create(user = user)
            return {
                "phone_number":user.phone_number,
                "token":token.key
            }
        raise serializers.ValidationError("Invalid credentials")
    

class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Staff
        fields = [
            "id",
            "uuid",
            "identity",
            "email",
            "address",
            "dob",
            "date_of_joining",
            "license_no",
            "user"
        ]
        

class DriverSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Driver
        fields =[
            "id",
            "uuid",
            "identity",
            "email",
            "address",
            "dob",
            "date_of_joining",
            "user"
        ]