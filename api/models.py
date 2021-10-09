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
    #required = False
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

class WhiskyCategory(models.Model):
    category_name = models.CharField(max_length = 50, null = True)

    def __str__(self):
        return self.category_name

class Whisky(models.Model):
    #input
    name_eng = models.CharField(max_length = 100, null = True, blank = True)
    name_kor = models.CharField(max_length = 100, null = True)
    category = models.ForeignKey(WhiskyCategory, related_name = 'category', on_delete = models.CASCADE, null = True, blank = True)
    region = models.CharField(max_length = 100, null = True)
    distillery = models.CharField(max_length = 100, null = True, blank = True)
    bottler = models.CharField(max_length = 100, null = True, blank = True)
    bottling_series = models.CharField(max_length = 100, null = True, blank = True)
    age = models.IntegerField(null = True)
    cask_type = models.CharField(max_length = 100, null = True, blank = True)
    alcohol = models.FloatField(null = True)
    size = models.IntegerField(null = True, blank = True)
    #if single cask
    single_cask = models.BooleanField(default = False)
    cask_number = models.IntegerField(null = True, blank = True)
    #checklist?
    non_chillfiltered = models.BooleanField(null = True, default = False)
    natural_color = models.BooleanField(null = True, default = False)
    independent_whisky = models.BooleanField(null = True, default = False)
    #final field
    whisky_detail = models.TextField(null = True, blank = True)
    #non-input / auto_add
    contributor = models.CharField(max_length = 100, null = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    #ratings
    whisky_ratings = models.FloatField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 0)
    rating_counts = models.IntegerField(validators = [MinValueValidator(0)], default = 0)
    #Admin confirmation
    confirmed = models.BooleanField(default = False)
    updated = models.BooleanField(default = True)
    #def __str__(self):
    #    return self.name

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
    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE, related_name = 'reactions', related_query_name = 'reactions')
    review_title = models.CharField(max_length=255)
    review_body = models.TextField()
    #rating
    avg_rating = models.FloatField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 0)
    
    nose_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100, blank = False)
    taste_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100, blank = False)
    finish_rating = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(100)], default = 100, blank = False)
    #tag
    # nose_tag = models.ManyToManyField(Tag, related_name = "nose_tag")
    # taste_tag = models.ManyToManyField(Tag, related_name = "taste_tag")
    # finish_tag = models.ManyToManyField(Tag, related_name = "finish_tag")
    flavor_tag = models.ManyToManyField(Tag, related_name = "flavor_tag")

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

class ReactionImage(models.Model):
    reaction = models.ForeignKey(Reaction, on_delete = models.CASCADE, null = True, related_name = 'reaction_image', related_query_name = 'reaction_image')
    image = models.FileField(null = True, blank = True, validators = [validate_image_file_extension])

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

#Profile - Whisky Menu 
#class Menu(models.Model):
#    user = models.ForeignKey(User, on_delete = models.CASCADE)
#    whisky = models.ForeignKey(Whisky, on_delete = models.CASCADE)
#    created_at = models.DateTimeField()
