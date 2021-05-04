from django.contrib.auth import (
    login as django_login,
    logout as django_logout
)
from django.shortcuts import render
from django.conf import settings

#Test API
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import api_view

#Custom Login
from .serializers import CustomLoginSerializer
from .models import TokenModel
from django.views.decorators.debug import sensitive_post_parameters
from django.utils.decorators import method_decorator
from rest_auth.app_settings import (
    TokenSerializer, UserDetailsSerializer, LoginSerializer,
    PasswordResetSerializer, PasswordResetConfirmSerializer,
    PasswordChangeSerializer, JWTSerializer, create_token
)

#email auth
from rest_framework.exceptions import NotFound
from rest_framework.permissions import AllowAny

#email auth(2)
from django.contrib.auth import get_user_model

#override
from django.http import (
    Http404,
    HttpResponsePermanentRedirect,
    HttpResponseRedirect,
)
from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from allauth.account import app_settings, signals

#Profile
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet

from api.models import Profile
from api.serializers import ProfileSerializer

sensitive_post_parameters_m = method_decorator(
    sensitive_post_parameters(
        'password', 'old_password', 'new_password1', 'new_password2'
    )
)


#Custom Login
class CustomLoginView(GenericAPIView):

    permission_classes = (AllowAny,)
    serializer_class = CustomLoginSerializer
    token_model = TokenModel

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(CustomLoginView, self).dispatch(*args, **kwargs)

    def process_login(self):
        django_login(self.request, self.user)

    def get_response_serializer(self):
        if getattr(settings, 'REST_USE_JWT', False):
            response_serializer = JWTSerializer
        else:
            response_serializer = TokenSerializer
        return response_serializer

    def login(self):
        self.user = self.serializer.validated_data['user']

        if getattr(settings, 'REST_USE_JWT', False):
            self.token = jwt_encode(self.user)
        else:
            self.token = create_token(self.token_model, self.user,
                                      self.serializer)

        if getattr(settings, 'REST_SESSION_LOGIN', True):
            self.process_login()

    def get_response(self):
        serializer_class = self.get_response_serializer()

        if getattr(settings, 'REST_USE_JWT', False):
            data = {
                'user': self.user,
                'token': self.token
            }
            serializer = serializer_class(instance=data,
                                          context={'request': self.request})
        else:
            serializer = serializer_class(instance=self.token,
                                          context={'request': self.request})

        response = Response(serializer.data, status=status.HTTP_200_OK)

        if getattr(settings, 'REST_USE_JWT', False):
            from rest_framework_jwt.settings import api_settings as jwt_settings
            if jwt_settings.JWT_AUTH_COOKIE:
                from datetime import datetime
                expiration = (datetime.utcnow() + jwt_settings.JWT_EXPIRATION_DELTA)
                response.set_cookie(jwt_settings.JWT_AUTH_COOKIE,
                                    self.token,
                                    expires=expiration,
                                    httponly=True)
        return response

    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(data=self.request.data,
                                              context={'request': request})
        self.serializer.is_valid(raise_exception=True)

        self.login()
        return self.get_response()


#Email Confirmation
class CustomConfirmEmailView(APIView):

    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        # A React Router Route will handle the failure scenario 
        return HttpResponseRedirect('/login')

    def get_object(self, queryset=None):
        key = self.kwargs["key"]
        emailconfirmation = EmailConfirmationHMAC.from_key(key)
        if not emailconfirmation:
            if queryset is None:
                queryset = self.get_queryset()
            try:
                emailconfirmation = queryset.get(key=key.lower())
            except EmailConfirmation.DoesNotExist:
                raise Http404()
        return emailconfirmation

    def get_queryset(self):
        qs = EmailConfirmation.objects.all_valid()
        qs = qs.select_related("email_address__user")
        return qs

confirm_email = CustomConfirmEmailView.as_view()

#ProfileListView
class MyProfileViewSet(generics.ListAPIView):   #/myprofile/ : simple profile list view
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Profile.objects.all()
        return queryset.filter(user = self.request.user)

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

