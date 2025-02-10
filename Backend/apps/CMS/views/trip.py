from apps.BASE.views import AppCUDAPIViewSet, AppListAPIViewSet
from apps.CMS.models import Trip
from apps.CMS.serializers import TripReadSerializer,TripWriteSerializer

class TripListAPIView(AppListAPIViewSet):
    search_fields = [""]
    queryset = Trip.objects.all()
    serializer_class = TripReadSerializer

class TripCUDAPIView(AppCUDAPIViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripWriteSerializer
    