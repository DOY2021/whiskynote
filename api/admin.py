from django.contrib import admin
from api.models import Profile, Whisky, Reaction, Follow

#CustomUserAdmin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

class ProfileInline(admin.StackedInline):
	model = Profile
	con_delete = False

class FollowInline(admin.StackedInline):
    model = Follow
    fk_name = "following"
    con_delete = False

class FollowerInline(admin.StackedInline):
    model = Follow
    fk_name = "follower"
    con_delete = False

#class FriendInline(admin.StackedInline):
#    model = Friend
#    fk_name = "to_user"
#    #from_user fix
#    con_delete = False
#
#class FriendRequestFromInline(admin.StackedInline):
#    model = FriendshipRequest
#    fk_name = "from_user"
#    con_delete = False
#
#class FriendRequestToInline(admin.StackedInline):
#    model = FriendshipRequest
#    fk_name = "to_user"
#    con_delete = False
#
#class BlockInline(admin.StackedInline):
#    model = Block
#    fk_name = "blocked"
#    #blocker fix
#    con_delete = False
#

class CustomUserAdmin(UserAdmin):
	inlines = (ProfileInline, FollowInline, FollowerInline)

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
	list_display = ("id", "user","nickname", "bio", "profile_photo")

@admin.register(Whisky)
class WhiskyAdmin(admin.ModelAdmin):
	list_display = ("id", "name", "brand", "whisky_detail", "whisky_region", "whisky_ratings", "rating_counts")
	search_fields = ["name", "brand", "whisky_region"]

@admin.register(Reaction)
class ReactionAdmin(admin.ModelAdmin):
	list_display = ("id","whisky", "user", "review_title","review_body", "nose_rating", "taste_rating", "finish_rating", "nose_tag")
