#?
from __future__ import unicode_literals

#
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_auth.registration.views import VerifyEmailView
from api.views import confirm_email, CustomLoginView, ProfileCreateAPIView, ProfileViewSet, ProfileDetailAPIView, WhiskyListAPIView, WhiskyDetailAPIView

from rest_framework import permissions

#CustomUrls-RestAuth_related
from rest_auth.views import (
    LogoutView, UserDetailsView, PasswordChangeView, PasswordResetView,
    )
from api.views import PasswordResetConfirmView

#Friendship
from api.views import FriendViewSet, FriendRequestViewSet #,FriendRequestViewSet
from rest_framework.routers import DefaultRouter
from api_friendship.urls import router


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
    path("profile/all/", ProfileViewSet.as_view(), name = 'profile_all'),
    path("profile/create/", ProfileCreateAPIView.as_view(), name = 'profile_create'),
    path("profile/<int:pk>/", ProfileDetailAPIView.as_view(), name = 'profile_detail'),

    #whisky
    path("whisky/", WhiskyListAPIView.as_view(), name = 'whisky'),
    path("whisky/<int:pk>", WhiskyDetailAPIView.as_view(), name = 'whisky_detail'),

    #Friendship
    path('friendship/', include(router.urls))
    ]


#Friendship 
#router = DefaultRouter()
#router.register(r'friends', FriendViewSet, basename = 'friends')
#router.register(r'friendrequests', FriendRequestViewSet, basename = 'friendrequests')
#urlpatterns = router.urls


    #Media setting
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
