from rest_framework.pagination import PageNumberPagination


class AppPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "page-size"
    max_page_size = 100
