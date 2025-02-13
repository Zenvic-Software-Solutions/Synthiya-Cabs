from django.http import JsonResponse
from HELPERS.utils import get_system_status 

def system_status_view(request):
    system_status = get_system_status()
    return JsonResponse(system_status)
