from django.contrib import admin
from api.models import Profile, Whisky
# Register your models here.

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
	list_display = ("user","nickname", "bio", "profile_photo")

@admin.register(Whisky)
class WhiskyAdmin(admin.ModelAdmin):
	list_display = ("id", "name", "whisky_detail", "whisky_region", "whisky_rating")
	search_fiels = ["name", "whisky_region"]