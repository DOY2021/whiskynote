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
from rest_framework.parsers import FormParser, MultiPartParser, FileUploadParser

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

#API
from api.models import Profile, Whisky
from api.serializers import ProfileSerializer, ProfileCreateSerializer, WhiskySerializer

#Password Reset
from api.serializers import PasswordResetConfirmSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet


sensitive_post_parameters_m = method_decorator(
    sensitive_post_parameters(
        'password', 'old_password', 'new_password1', 'new_password2'
    )
)

#Follow-Unfollow
from api.serializers import UserSerializer, FollowerSerializer, BlockSerializer


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
        return HttpResponseRedirect('')

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


#Password Reset
class PasswordResetConfirmView(GenericAPIView):
    """
    Password reset e-mail link is confirmed, therefore
    this resets the user's password.

    Accepts the following POST parameters: token, uid,
        new_password1, new_password2
    Returns the success/fail message.
    """
    serializer_class = PasswordResetConfirmSerializer
    permission_classes = (AllowAny,)

    @sensitive_post_parameters_m
    def dispatch(self, *args, **kwargs):
        return super(PasswordResetConfirmView, self).dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": ("Password has been reset with the new password.")}
        )

#ProfileCreateView
class ProfileCreateAPIView(generics.CreateAPIView):
    model = Profile
    serializer_class = ProfileCreateSerializer
    parser_classes = (FormParser, MultiPartParser)

    def perform_create(self, serializer):
        #File Upload
        file_obj = serializer.validated_data['profile_photo']
        #
        serializer.save(user_id = self.request.user.pk, id = self.request.user.pk)


#ProfileListView
class ProfileViewSet(generics.ListAPIView):   #/myprofile/ : simple profile list view
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ProfileDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    parser_classes = (FormParser, MultiPartParser)

    def put(self, request, *args, **kwargs):
        file_obj = request.data['profile_photo']
        return self.update(request, *args, **kwargs)

class WhiskyListAPIView(generics.ListAPIView):
    queryset = Whisky.objects.all()
    serializer_class = WhiskySerializer

class WhiskyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Whisky.objects.all()
    serializer_class = WhiskySerializer
    serializer_class = FollowerSerializer


#Follow-Unfollow

class FollowUnfollowView(APIView):
    
    permission_classes = [IsAuthenticated]

    def current_profile(self):
        try:
            return Profile.objects.get(user = self.request.user)
        except Profile.DoesNotExist:
            raise Http404
    
    def other_profile(self, pk):
        try:
            return Profile.objects.get(id = pk)
        except Profile.DoesNotExist:
            raise Http404

    def post(self, request, format = None):

        pk = request.data.get('id')
        req_type = request.data.get('type')

        current_profile = self.current_profile()
        other_profile = self.other_profile(pk)

        if req_type == 'follow':
            if other_profile.blocked_user.filter(id = current_profile.id).exists():
                return Response({"Following Fail"}, status = status.HTTP_400_BAD_REQUEST)
            
            elif current_profile == other_profile:
                return Response({"Cannot Follow Yourself"}, status = status.HTTP_400_BAD_REQUEST)

            else:
                current_profile.following.add(other_profile)
                other_profile.followers.add(current_profile)
                return Response({"Following Success"}, status = status.HTTP_200_OK)

        #elif req_type = 'accept':
        #elif req_type = 'decline':

        elif req_type == 'unfollow':
            current_profile.following.remove(other_profile)
            other_profile.followers.remove(current_profile)
            return Response({"Remove Success"}, status = status.HTTP_200_OK)

        #Fetch followers, following detail and blocked user
        
        def patch(self, request, format = None):

            req_type = request.data.get('type')

            if req_type == "follow_detail":
                serializer = FollowerSerializer(self.current_profile())
                return Response({"data" : serializer.data}, status = status.HTTP_200_OK)

        #Block and Unblock User
        def put(self, request, format = None):
            pk = request.data.get('id')
            req_type = request.data.get('type')

            if req_type == 'block':
                self.current_profile().blocked_user.add(self.other_profile(pk))
                return Response({"Blocked"}, status = status.HTTP_200_OK)

            elif req_type == 'unblock':
                self.current_profile().blocked_user.remove(self.other_profile(pk))
                return Response({"Unblocked"}, status = status.HTTP_200_OK)


