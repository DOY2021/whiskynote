from pathlib import Path
import os
import json
from django.core.exceptions import ImproperlyConfigured

#JWT Setting
from datetime import timedelta


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Build paths inside the project like this: BASE_DIR / 'subdir'.
#BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
#secret_file = os.path.join(BASE_DIR, 'secret.json')
#with open(secret_file) as f:
#    secrets = json.loads(f.read())
#
#def get_secret(setting, secrets=secrets):
#    try:
#        return secrets[setting]
#    except KeyError:
#        error_msg = "Set the {} environment variable".format(setting)
#        raise ImproperlyConfigured(error_msg)
#
#SECRET_KEY = get_secret("SECRET_KEY")

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-5_^(+n7*k%ts*iv1r^l#_ys-8-o3$7zlhm-id)l+m_80z3yy5g')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Host addresses
ALLOWED_HOSTS = ['*']

# Applications
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    #DFR
    'rest_framework',
    'rest_framework.authtoken',
    #password-reset
    #allauth
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    #restauth
    'rest_auth.registration',
    #swagger
    'rest_framework_swagger',
    'drf_yasg',
    #Apps
    'api.apps.ApiConfig',
    #Social-login Providers
    'allauth.socialaccount.providers.kakao',
    'allauth.socialaccount.providers.naver',

    #Filter package
    'django_filters',

    #allow CORS
    'corsheaders',

    ]

SITE_ID = 1 

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'Whisky.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['Whisky/templates/'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_AUTH_SERIALIZERS = {
    'PASSWORD_RESET_SERIALIZER':
        'api.serializers.PasswordResetSerializer',

    #CustomTokenSerializer
    'TOKEN_SERIALIZER': 'api.serializers.CustomTokenSerializer' 

        }

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': [
        #SessionAuthentication OFF(210905)
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ],
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    )
    }

#JWT settings

REST_USE_JWT = True

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=2),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
}


WSGI_APPLICATION = 'Whisky.wsgi.application'

#CORS
CORS_ORIGIN_ALLOW_ALL = False
#CSRF_TRUSTED_ORIGINS = [
#        'whiskynote.kr',
#        'whiskynote.herokuapp.com',
#        'pensive-shannon-99847a.netlify.app',
#        'https://whiskynote.kr/',
#        'https://whiskynote.herokuapp.com/',
#        'https://pensive-shannon-99847a.netlify.app/'
#]
CORS_ORIGIN_WHITELIST = [
        #requires scheme, no path
        'https://whiskynote.kr',
        'https://whiskynote.herokuapp.com',
        'https://pensive-shannon-99847a.netlify.app'
]
CSRF_COOKIE_DOMAIN = '.pensive-shannon-99847a.netlify.app'
#
#        'whiskynote.kr',
#        'whiskynote.herokuapp.com',
#        'pensive-shannon-99847a.netlify.app',
#        'https://whiskynote.kr/',
#        'https://whiskynote.herokuapp.com/',
#        'https://pensive-shannon-99847a.netlify.app/'
#]


CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CORS_REPLACE_HTTPS_REFERER = True

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SAMESITE = 'None'
SECURE_REFERRER_POLICY = None

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases
## Insert into secret.json before release

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'masterdb2',
        'USER': 'doy',
        'PASSWORD':'doy',
        'HOST': '127.0.0.1',
        'PORT': 5432,
    }
}

# Database url
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Seoul'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = (
        os.path.join(BASE_DIR, 'static'),
        )

#Media uploads

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Email SMTP

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = '587'
EMAIL_HOST_USER = 'ensemble.kor@gmail.com'
EMAIL_HOST_PASSWORD = 'Ensemble123!'
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# Email Auth

ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_CONFIRM_EMAIL_ON_GET = True

#Following is added to enable registration with email instead of username

AUTHENTICATION_BACKENDS = (
        # Needed to login by username in Django admin, regardless of 'allauth'
        "django.contrib.auth.backends.ModelBackend",

        #'allauth' specific authentication methods, such as login by email
        "allauth.account.auth_backends.AuthenticationBackend"
        )

# Swagger Settings

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'api_key': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'Authorization'
        }
    },
}

# Django 3.2 Release Note

DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'

