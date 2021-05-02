from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url

#Swagger settings
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_url_patterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
        ]

#Swagger schema_view
schema_view = get_schema_view(
        openapi.Info(
            title="Django API",
            default_version='v1',
            terms_of_service="https://www.google.com/policies/terms/",
        ),
        public=True,
        permission_classes=(permissions.AllowAny,),
        patterns=schema_url_patterns,
        )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),

    #swagger
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ]

