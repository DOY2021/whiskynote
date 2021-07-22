from rest_framework.pagination import PageNumberPagination

class PageSize5Pagination(PageNumberPagination):
    page_size = 5

