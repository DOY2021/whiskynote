#?
from __future__ import unicode_literals, print_function

#
from django.contrib.auth import get_user_model, authenticate
from django.conf import settings
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode as uid_decoder
from django.utils.http import urlsafe_base64_encode as uid_encoder
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import force_text, force_bytes

from rest_framework import serializers, exceptions
from rest_framework.exceptions import ValidationError

#from posts.models import Post
from api.models import Profile, Whisky, Reaction, Follow, Tag

#CustomTokenSerializer
from rest_auth.models import TokenModel
from rest_auth.utils import import_callable
from rest_auth.serializers import UserDetailsSerializer as DefaultUserDetailsSerializer

#Profile - Collection & Whisky
from api.models import Collection, Wishlist

# This is to allow you to override the UserDetailsSerializer at any time.
# If you're sure you won't, you can skip this and use DefaultUserDetailsSerializer directly
rest_auth_serializers = getattr(settings, 'REST_AUTH_SERIALIZERS', {})
UserDetailsSerializer = import_callable(
    rest_auth_serializers.get('USER_DETAILS_SERIALIZER', DefaultUserDetailsSerializer)
)

# Get UserModel
from django.contrib.auth.models import User
UserModel = get_user_model()


class CustomLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    def authenticate(self, **kwargs):
        return authenticate(self.context['request'], **kwargs)

    def _validate_email(self, email, password):
        user = None

        if email and password:
            user = self.authenticate(email=email, password=password)
        else:
            msg = _('Must include "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        user = None

        if 'allauth' in settings.INSTALLED_APPS:
            from allauth.account import app_settings

            # Authentication through email
            if app_settings.AUTHENTICATION_METHOD == app_settings.AuthenticationMethod.EMAIL:
                user = self._validate_email(email, password)

        if user:
            if not user.is_active:
                msg = _('User account is disabled.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Unable to log in with provided credentials.')
            raise exceptions.ValidationError(msg)

        # If required, is the email verified?
        if 'rest_auth.registration' in settings.INSTALLED_APPS:
             from allauth.account import app_settings
             if app_settings.EMAIL_VERIFICATION == app_settings.EmailVerificationMethod.MANDATORY:
                email_address = user.emailaddress_set.get(email=user.email)
                if not email_address.verified:
                    raise serializers.ValidationError(_('E-mail is not verified.'))

        attrs['user'] = user
        return attrs

class CustomTokenSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = TokenModel
        fields = ('key', 'user', 'user_id')

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    password_reset_form_class = PasswordResetForm

    def validate_email(self, value):
        self.reset_form = self.password_reset_form_class(data=self.initial_data)
        if not self.reset_form.is_valid():
            raise serializers.ValidationError(_('Error'))

        ###### FILTER YOUR USER MODEL ######
        if not UserModel.objects.filter(email=value).exists():

            raise serializers.ValidationError(_('Invalid e-mail address'))
        return value

    def save(self):
        request = self.context.get('request')
        opts = {
            'use_https': request.is_secure(),
            'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),

            ###### USE YOUR HTML FILE ######
            'email_template_name': 'email/user_reset_password.html',

            'request': request,
        }
        self.reset_form.save(**opts)

class PasswordResetConfirmSerializer(serializers.Serializer):
    """
    Serializer for requesting a password reset e-mail.
    """
    new_password1 = serializers.CharField(max_length=128)
    new_password2 = serializers.CharField(max_length=128)
    uid = serializers.CharField()
    #Front url parameter <uid>
    token = serializers.CharField()
    #Front url parameter <token>

    set_password_form_class = SetPasswordForm

    def custom_validation(self, attrs):
        pass

    #def validate(self, attrs):
    #    self._errors = {}
    #    request_object = self.context['request']
    #    uidb64 = request_object.query_params.get('uidb64')
    #    uid = force_text(uid_decoder('Mg'))
    #    #retrieve uid info in 'MQ' space
    #    self.user = UserModel._default_manager.get(pk=uid)

    #    self.set_password_form = self.set_password_form_class(
    #            user=self.user, data=attrs
    #            )
    #    if not self.set_password_form.is_valid():
    #        raise serializers.ValidationError(self.set_password_form.error)

    #    return attrs

    def validate(self, attrs):
        self._errors = {}

        # Decode the uidb64 to uid to get User object
        try:
            uid = force_text(uid_decoder(attrs['uid']))
            self.user = UserModel._default_manager.get(pk=uid)
        except (TypeError, ValueError, OverflowError, UserModel.DoesNotExist):
            raise ValidationError({'uid': ['Invalid value']})

        self.custom_validation(attrs)
        # Construct SetPasswordForm instance
        self.set_password_form = self.set_password_form_class(
            user=self.user, data=attrs
        )
        if not self.set_password_form.is_valid():
            raise serializers.ValidationError(self.set_password_form.errors)
        if not default_token_generator.check_token(self.user, attrs['token']):
            raise ValidationError({'token': ['Invalid value']})

        return attrs

    def save(self):
        return self.set_password_form.save()


#Profile
class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    #posts = serializers.PrimaryKeyRelatedField(many = True, read_only = True)

    class Meta:
        model = Profile
        fields = ("id", "user", "nickname", "bio", "profile_photo")

class ProfileCreateSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Profile
        fields = ("user", "id", "nickname", "bio", "profile_photo")

        def create(self, validated_data):
            profile = Profile.objects.create(user = user)
            return profile

class ProfilePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("profile_photo", )


#WhiskyDB
#General Whisky List Serializer (Rename if possible -> "WhiskyListSerializer")
class WhiskySerializer(serializers.ModelSerializer):
    class Meta:
        model = Whisky
        fields = '__all__'
        read_only_fields = ('whisky_ratings','rating_counts')

#Whisky Create Serializer (Open-type DB function)
class WhiskyCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Whisky
        #Update fields according to DB categories
        fields = ('name', 'category', 'distillery', 'bottler', 'bottle_type', 'vintage', 'bottled', 'age', 'whisky_detail')
        #fields = ('name', 'brand', 'whisky_detail', 'whisky_region')

#Whisky Confirm
class WhiskyConfirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Whisky
        fields = '__all__'

#Reaction + Tag
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('kor_tag',)

class ReactionListSerializer(serializers.ModelSerializer):
    whisky_name = serializers.SerializerMethodField()
    def get_whisky_name(self, obj):
        return obj.whisky.name

    userName = serializers.SerializerMethodField()
    def get_userName(self, obj):
        return obj.user.username
    '''
    nose_tag = serializers.SlugRelatedField(
        many = True,
        read_only = True,
        slug_field = 'kor_tag'
    )
    taste_tag = serializers.SlugRelatedField(
        many = True,
        read_only = True,
        slug_field = 'kor_tag'
    )
    finish_tag = serializers.SlugRelatedField(
        many = True,
        read_only = True,
        slug_field = 'kor_tag'
    )
    nose_tag = TagSerializer(many = True)

    taste_tag = TagSerializer(many = True)

    finish_tag = TagSerializer(many = True)
    '''
    class Meta:
        model = Reaction
        fields = ('id','user','userName', 'whisky_name', 'review_title', 'review_body', 'nose_rating', 'taste_rating', 'finish_rating', 'nose_tag', 'taste_tag', 'finish_tag', 'created_at','modified_at')
        read_only_fields = ('user',)


#Follow(New)
class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ("following", "follower")

class FollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ("follower", )

class FollowingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ("following", )

#Profile - Collection & Wishlist
class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ("whisky", "created_at")

class CollectionViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ("whisky", "created_at")
        depth = 1

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ("whisky", "created_at")

class WishlistViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ("whisky", "created_at")
        depth = 1
