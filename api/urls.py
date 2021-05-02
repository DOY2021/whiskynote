from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_auth.registration.views import VerifyEmailView
from api.views import confirm_email, CustomLoginView

from rest_framework import permissions

#CustomUrls
from rest_auth.views import (
    LogoutView, UserDetailsView, PasswordChangeView, PasswordResetView, PasswordResetConfirmView
    )

urlpatterns = [
    #rest-auth
    path('password/reset/', PasswordResetView.as_view(), name='rest_password_reset' ),
    path('password/reset/confirm/', PasswordResetConfirmView.as_view(), name='rest_password_reset_confirm'),
    path('logout/', LogoutView.as_view(), name='rest_logout'),
    path('user/', UserDetailsView.as_view(), name='rest_user_details'),
    path('password/change/', PasswordChangeView.as_view(), name='rest_password_change'),

    #customlogin
    path('login/', CustomLoginView.as_view(), name='rest_login'),

    #registration
    path('register/', include('rest_auth.registration.urls')),

    #email verification
    re_path(r'^account-confirm-email/$', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', confirm_email, name='account_confirm_email'),
    ]

    #Media setting
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

