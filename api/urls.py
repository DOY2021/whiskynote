#?
from __future__ import unicode_literals

#
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_auth.registration.views import VerifyEmailView
from api.views import confirm_email, CustomLoginView,\
    ProfileCreateAPIView, ProfileViewSet, ProfileDetailAPIView,\
    WhiskyListAPIView, WhiskyDetailAPIView, WhiskyCreateAPIView, WhiskyConfirmListAPIView, WhiskyConfirmAPIView,\
    reaction_list_create, reaction_update_delete,\
    TagListView

from rest_framework import permissions

#CustomUrls-RestAuth_related
from rest_auth.views import (
    LogoutView, UserDetailsView, PasswordChangeView, PasswordResetView,
    )
from api.views import PasswordResetConfirmView

#Follow
from api.views import FollowView, FollowerDetailView, FollowingDetailView

#Collection & Wishlist
from api.views import WishlistAPIView, WishlistCreateAPIView,  CollectionAPIView, CollectionCreateAPIView

#Reaction Comment
from api.views import ReactionCommentListAPIView, ReactionCommentCreateAPIView

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

    #Follow
    path("follow/", FollowView.as_view(), name = "follow"),
    path("following/<int:pk>", FollowingDetailView.as_view(), name = "followers"),
    path("follower/<int:pk>", FollowerDetailView.as_view(), name = "following"),

    #Collection & Wishlist
    path("<int:pk>/collection", CollectionAPIView.as_view(), name = "collection"),
    path("collection/create/", CollectionCreateAPIView.as_view(), name = "collection_create"),
    path("<int:pk>/wishlist", WishlistAPIView.as_view(), name = "wishlist"),
    path("wishlist/create/", WishlistCreateAPIView.as_view(), name = "wishlist_new"),

    #whisky
    path("whisky/", WhiskyListAPIView.as_view(), name = 'whisky'),
    path("whisky/<int:pk>", WhiskyDetailAPIView.as_view(), name = 'whisky_detail'),
    path("whisky/new", WhiskyCreateAPIView.as_view(), name = 'whisky_new'),
    path("whisky/confirm/", WhiskyConfirmListAPIView.as_view(), name = 'whisky_confirm_list'),
    path("whisky/confirm/<int:pk>", WhiskyConfirmAPIView.as_view(), name = 'whisky_confirm'),

    #reaction
    path('reaction_list_create/<int:whisky_pk>/', reaction_list_create),
    path('reaction/<int:reaction_pk>/', reaction_update_delete),

    #tag (list only)
    path('tag/all/', TagListView.as_view(), name = 'tag'),

    #reaction comment
    path('reaction/<int:reaction_pk>/comment/lists', ReactionCommentListAPIView.as_view(), name = 'reaction_comment_list'),
    path('reaction/<int:reaction_pk>/comment/new', ReactionCommentCreateAPIView.as_view(), name = 'reaction_comment_create'),
    ]

    #Media setting
#if settings.DEBUG:
#    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
