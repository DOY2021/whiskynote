from django.conf import settings
from django.db import models
from rest_framework.authtoken.models import Token as DefaultTokenModel
from .utils import import_callable
from django.contrib.auth.models import User
from datetime import datetime
from django.core.validators import MaxValueValidator, MinValueValidator

#rest_auth
TokenModel = import_callable(
    getattr(settings, 'REST_AUTH_TOKEN_MODEL', DefaultTokenModel))


class Profile(models.Model):
    #required at profile creation
    user = models.OneToOneField(User, on_delete= models.CASCADE)
    nickname = models.CharField(max_length = 64, unique=True)
    bio = models.CharField(max_length = 240, blank = True)
    profile_photo = models.FileField(null = True, blank = True)
    #credit point & tier
    credit = models.IntegerField(validators = [MinValueValidator(0)], default = 0)
    tier = models.CharField(max_length = 64, null = True)
    #auto_add fields
    created_at = models.DateTimeField(auto_now_add = True, editable=False)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.user.username

class Whisky(models.Model):
    name = models.CharField(max_length = 100)
    brand = models.CharField(max_length = 100, null = True)
    whisky_detail = models.TextField(null=True, blank = True)
    whisky_region = models.CharField(max_length = 100, null = True, blank = True)
    whisky_ratings = models.FloatField(validators = [MinValueValidator(0), MaxValueValidator(5)], default = 0)
    rating_counts = models.IntegerField(validators = [MinValueValidator(0)], default = 0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    #Admin confirmation
    confirmed = models.BooleanField(default = False)

    def __str__(self):
        return self.name

class Reaction(models.Model):
	user = models.ForeignKey(User, on_delete = models.CASCADE)
	whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE)
	review_title = models.CharField(max_length=255)
	review_body = models.TextField()
	review_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(5)])

	created_at = models.DateTimeField(auto_now_add=True)
	modified_at = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ["-created_at"]

class Follow(models.Model):
    following = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "following")
    follower = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "followers")
    #Functions
    created = models.DateTimeField(auto_now_add = True)


