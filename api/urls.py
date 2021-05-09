from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_auth.registration.views import VerifyEmailView
from api.views import confirm_email, CustomLoginView, MyProfileViewSet, ProfileListAPIView, ProfileDetailAPIView, WhiskyListAPIView, WhiskyDetailAPIView

from rest_framework import permissions

#CustomUrls
from rest_auth.views import (
    LogoutView, UserDetailsView, PasswordChangeView, PasswordResetView,
    )
from api.views import PasswordResetConfirmView

urlpatterns = [
    #rest-auth
    path('password/reset/', PasswordResetView.as_view(), name='rest_password_reset' ),
    path('password/reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
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

    #profile
    path("myprofile/", MyProfileViewSet.as_view(), name = 'myprofile'),
    path("profile/", ProfileListAPIView.as_view(), name = 'profile'),
    path("profile/<int:pk>/", ProfileDetailAPIView.as_view(), name = 'profile_detail'),

    #whisky
    path("whisky/", WhiskyListAPIView.as_view(), name = 'whisky'),
    path("whisky/<int:pk>", WhiskyDetailAPIView.as_view(), name = 'whisky_detail'),
    ]

    #Media setting
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

