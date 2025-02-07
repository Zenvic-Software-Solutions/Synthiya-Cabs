from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, parsers
from rest_framework.decorators import action
from rest_framework.mixins import (
    CreateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    UpdateModelMixin,
)
from rest_framework.viewsets import GenericViewSet
from apps.BASE.pagination import AppPagination
from apps.BASE.serializers import AppModelSerializer, simple_queryset_serializer
from apps.BASE.views.base import AppCreateAPIView, AppViewMixin

DEFAULT_IDENTITY_DISPLAY_FIELDS = (
    "id",
    "uuid",
    "identity",
)

class AppGenericViewSet(GenericViewSet):
    pass


class AppListAPIViewSet(
    AppViewMixin,
    ListModelMixin,
    AppGenericViewSet,
):

    pagination_class = AppPagination  # page-size: 12
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    filterset_fields = []  # override
    search_fields = []  # override
    ordering_fields = "__all__"

    _details = {}
    column_details = {}
    filter_details = {}

    @action(
        methods=["GET"],
        url_path="table-meta",
        detail=False,
    )
    def get_meta_for_table_handler(self, *args, **kwargs):
        return self.send_response(data=self.get_table_meta())

    def get_table_meta(self) -> dict:
        return {}

    def get_table_columns_details(self) -> dict:
        return self.column_details
    
    def get_table_filter_details(self) -> dict:
        return self.filter_details

    def serialize_for_filter(self, queryset, fields=None):
        if not fields:
            fields = DEFAULT_IDENTITY_DISPLAY_FIELDS

        return simple_queryset_serializer(queryset=queryset, fields=fields)

    def serialize_choices(self, choices: list):
        from apps.BASE.helpers import get_display_name_for_slug

        return [{"id": _, "uuid":_, "identity": get_display_name_for_slug(_)} for _ in choices]






class AbstractLookUpFieldMixin:

    lookup_url_kwarg = "uuid"
    lookup_field = "uuid"


class AppCUDAPIViewSet(
    AbstractLookUpFieldMixin,
    AppViewMixin,
    CreateModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    AppGenericViewSet,
):

    @action(
        methods=["GET"],
        url_path="meta",
        detail=False,
    )
    def get_meta_for_create(self, *args, **kwargs):

        return self.send_response(data=self.get_serializer().get_meta_for_create())

    @action(
        methods=["GET"],
        url_path="meta",
        detail=True,
    )
    def get_meta_for_update(self, *args, **kwargs):
        return self.send_response(
            data=self.get_serializer(instance=self.get_object()).get_meta_for_update()
        )




# import logging

# logger = logging.getLogger(__name__)

def get_upload_api_view(meta_model, meta_fields=None):
    if not meta_fields:
        meta_fields = ["file", "id", "uuid"]

    class _View(AppCreateAPIView):
        class _Serializer(AppModelSerializer):
            class Meta(AppModelSerializer.Meta):
                model = meta_model
                fields = meta_fields

        parser_classes = [parsers.MultiPartParser]
        serializer_class = _Serializer

        def create(self, request, *args, **kwargs):
            file_size_limit = 5 * 1024 * 1024  # 5 MB

            if "file" not in request.data:
                return self.send_error_response(
                    data={"detail": "File not found in the request"}
                )

            uploaded_file = request.data["file"]

            # Log the file details
            # logger.info(f"Uploaded file details: name={uploaded_file.name}, size={uploaded_file.size}, content_type={uploaded_file.content_type}")

            # Check for file size
            if uploaded_file.size > file_size_limit:
                return self.send_error_response(
                    data={"detail": "File size exceeds the limit of 5 MB"}
                )

            # Optional: Add content type check here
            allowed_content_types = ["image/jpeg", "image/png", "application/pdf"]
            if uploaded_file.content_type not in allowed_content_types:
                return self.send_error_response(
                    data={"detail": f"Invalid file type. Allowed types are {', '.join(allowed_content_types)}."}
                )

            # Further check for WhatsApp file-specific issues if needed
            # e.g., check for extra metadata, malformed headers, etc.

            return super().create(request, *args, **kwargs)

    return _View
