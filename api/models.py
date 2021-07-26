from django.conf import settings
from django.db import models
from rest_framework.authtoken.models import Token as DefaultTokenModel
from .utils import import_callable
from django.contrib.auth.models import User
from datetime import datetime
from django.core.validators import MaxValueValidator, MinValueValidator, validate_image_file_extension
from model_utils import Choices
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
    name = models.CharField(max_length = 100, null = True)
    #Updated - whisky contributor saved in each instance
    contributor = models.CharField(max_length = 100, null = True)
    #Updated - some instances may vary to choice field or ManyToMany relation field
    category = models.CharField(max_length = 100, null = True)
    distillery = models.CharField(max_length = 100, null = True)
    bottler = models.CharField(max_length = 100, null = True, blank = True)
    bottle_type = models.CharField(max_length = 100, null = True, blank = True)
    vintage = models.IntegerField(null = True, blank = True)
    bottled = models.IntegerField(null = True, blank = True)
    age = models.IntegerField(null = True)
    cask = models.CharField(max_length = 100, null = True, blank = True)
    casknumber = models.IntegerField(default = 0, blank = True)
    alcohol = models.IntegerField(null = True)
    whisky_detail = models.TextField(null = True, blank = True)
    #ratings
    whisky_ratings = models.FloatField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 0)
    rating_counts = models.IntegerField(validators = [MinValueValidator(0)], default = 0)
    #auto_add
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    #Old
    #brand = models.CharField(max_length = 100, null = True)
    #whisky_detail = models.TextField(null=True, blank = True)
    #whisky_region = models.CharField(max_length = 100, null = True, blank = True)

    #Admin confirmation
    confirmed = models.BooleanField(default = False)

    def __str__(self):
        return self.name

class WhiskyImage(models.Model):
    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE, null = True, related_name = 'whisky_image', related_query_name = 'whisky_image')
    image = models.FileField(null = True, blank = True, validators = [validate_image_file_extension])

#Reaction & Tag
class Tag(models.Model):
    kor_tag = models.CharField(max_length = 20)
    eng_tag = models.CharField(max_length = 30)

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
    nose_tag = models.ManyToManyField(Tag, related_name = "nose_tag")
    taste_tag = models.ManyToManyField(Tag, related_name = "taste_tag")
    finish_tag = models.ManyToManyField(Tag, related_name = "finish_tag")

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

#Comment
class ReactionComment(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    review = models.ForeignKey(Reaction, on_delete = models.CASCADE)
    comment_body = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    modified_at = models.DateTimeField(auto_now = True)

#Follow
class Follow(models.Model):
    follower = models.ForeignKey(Profile, on_delete = models.CASCADE, related_name = "is_following")
    following = models.ForeignKey(Profile, on_delete = models.CASCADE, related_name = "is_follower")
    #Functions
    created = models.DateTimeField(auto_now_add = True)

#Profile - Collection & Whisky
class Collection(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)

