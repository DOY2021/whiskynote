from django.conf import settings
from django.db import models
from rest_framework.authtoken.models import Token as DefaultTokenModel
from .utils import import_callable
from django.contrib.auth.models import User
from datetime import datetime
from django.core.validators import MaxValueValidator, MinValueValidator
from model_utils import Choices
#rest_auth
TokenModel = import_callable(
    getattr(settings, 'REST_AUTH_TOKEN_MODEL', DefaultTokenModel))


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete= models.CASCADE)
    nickname = models.CharField(max_length = 64, unique=True)
    bio = models.CharField(max_length = 240, blank = True)
    profile_photo = models.FileField(null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add = True, editable=False)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.user.username

class Whisky(models.Model):
    name = models.CharField(max_length = 100)
    brand = models.CharField(max_length = 100, null = True)
    whisky_detail = models.TextField(null=True, blank = True)
    whisky_region = models.CharField(max_length = 100, null = True, blank = True)
    whisky_ratings = models.FloatField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 0)
    rating_counts = models.IntegerField(validators = [MinValueValidator(0)], default = 0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    #Admin confirmation
    confirmed = models.BooleanField(default = False)

    def __str__(self):
        return self.name

class Tag(models.Model):
    kor_tag = models.CharField(max_length = 9)
    eng_tag = models.CharField(max_length = 15)

    def __str__(self):
        return self.kor_tag

class Reaction(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE)
    review_title = models.CharField(max_length=255)
    review_body = models.TextField()
    #rating
    nose_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100)
    taste_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100)
    finish_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100)
    #tag
    '''
    TAG = Choices(
        ("Nothing", "Nothing"),
        ("Cereal", "곡물"),
        ("Woody", "나무"),
        ("Floral", "꽃"),
        ("Fruity", "과일"),
        ("Winey", "와인"),
        ("Sulphur", "유황"),
        ("Peaty", "피트"),
        ("Feinty", "후류")
    )
    nose_tag = models.CharField(max_length = 20, choices = TAG, default = TAG.Nothing)
    taste_tag = models.CharField(max_length = 20, choices = TAG, default = TAG.Nothing)
    finish_tag = models.CharField(max_length = 20, choices = TAG, default = TAG.Nothing)
    '''
    nose_tag = models.ManyToManyField(Tag, related_name = "nose_tag")
    taste_tag = models.ManyToManyField(Tag, related_name = "taste_tag")
    finish_tag = models.ManyToManyField(Tag, related_name = "finish_tag")

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

class Follow(models.Model):
    following = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "following")
    follower = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "followers")
    #Functions
    created = models.DateTimeField(auto_now_add = True)


