from HELPERS.choices import ROLE
from apps.BASE.views import AppListAPIViewSet,AppCUDAPIViewSet
from apps.ACCESS.models import Staff,User,Driver
from apps.ACCESS.serializers import StaffReadSerializer,DriverReadSerializer,UserReadSerializer,StaffWriteSerializer


class StaffListAPIView(AppListAPIViewSet):
    search_fields = ["user__phone_number","staff_id","identity","email"]
    filterset_fields = {
        "dob":["gte","lte"],
        "date_of_joining":["gte","lte"]
    }
    queryset = Staff.objects.all()
    
    serializer_class = StaffReadSerializer

    column_details = {
        "identity":"Name",
        "staff_id":"Staff ID",
        "user_details.phone_number":"Phone Number",
        "dob":"Birth Date",
        "date_of_joining":"Joining Date",

    }

    filter_details ={
        "dob":"Birth",
        "date_of_joining":"Joining Date"
    }

    def get_table_meta(self):
        
        data = {
            "columns":self.column_details,
            "filters":self.filter_details,
            "filter_data":{
            }
        }
        return data
    

class StaffCUDAPIView(AppCUDAPIViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffWriteSerializer
    

class DriverListAPIView(AppListAPIViewSet):
    search_fields = ["user__phone_number","driver_id","identity","email","license_no"]
    filterset_fields = {
        "dob":["gte","lte"],
        "date_of_joining":["gte","lte"]
    }
    queryset = Driver.objects.all()
    serializer_class = DriverReadSerializer

    column_details = {
        "identity":"Name",
        "driver_id":"Driver ID",
        "user_details.phone_number":"Phone Number",
        "dob":"Birth Date",
        "date_of_joining":"Joining Date",

    }

    filter_details ={
        "dob":"Birth",
        "date_of_joining":"Joining Date"
    }

    def get_table_meta(self):
        data = {
            "columns":self.column_details,
            "filters":self.filter_details,
            "filter_data":{
            }
        }
        return data
    


class UserListAPIView(AppListAPIViewSet):
    filterset_fields=["role"]
    search_fields = ["phone_number"]

    queryset = User.objects.all()
    serializer_class = UserReadSerializer


    column_details = {
        "phone_number":"Phone Number",
        "role":"Role",
        
    }

    filter_details ={
        "role" :"Role"
    }

    def get_table_meta(self):
        data = {
            "columns":self.column_details,
            "filters":self.filter_details,
            "filter_data":{
                "role":self.serialize_choices(ROLE["options"])
            }
        }
        return data
    


    
    