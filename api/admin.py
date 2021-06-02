from django.contrib import admin
from api.models import Profile, Whisky, Reaction
# Register your models here.

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
	list_display = ("id", "user","nickname", "bio", "profile_photo")

@admin.register(Whisky)
class WhiskyAdmin(admin.ModelAdmin):
	list_display = ("id", "name", "brand", "whisky_detail", "whisky_region", "whisky_ratings", "rating_counts")
	search_fields = ["name", "brand", "whisky_region"]

@admin.register(Reaction)
class ReactionAdmin(admin.ModelAdmin):
	list_display = ("id","whisky", "user", "review_title","review_body", "review_rating")