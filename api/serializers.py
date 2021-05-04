from django.contrib.auth import get_user_model, authenticate
from django.conf import settings
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_decode as uid_decoder
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import force_text

from rest_framework import serializers, exceptions
from rest_framework.exceptions import ValidationError

#from posts.models import Post

# Get the UserModel
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

from api.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    posts = serializers.PrimaryKeyRelatedField(many = True, read_only = True)

    class Meta:
        model = Profile
        fields = ("user", "id", "nickname", "bio", "profile_photo", "posts")


class ProfilePhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ("profile_photo", )

'''
class ProfileStatusSerializer(serializers.ModelSerializer):
    user_profile = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Profile
        fields = "__all__"
'''

