from django.contrib import admin
from api.models import Profile, WhiskyCategory, Whisky, Reaction, Follow, Tag, Collection, Wishlist, ReactionComment

#CustomUserAdmin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User


class ProfileInline(admin.StackedInline):
  model = Profile
  con_delete = False

class CustomUserAdmin(UserAdmin):
	inlines = (ProfileInline,)

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

class FollowInline(admin.StackedInline):
    model = Follow
    fk_name = "following"
    con_delete = False

class FollowerInline(admin.StackedInline):
    model = Follow
    fk_name = "follower"
    con_delete = False

class ProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "user","nickname", "bio", "profile_photo")
    inlines = [FollowInline, FollowerInline]

admin.site.register(Profile, ProfileAdmin)

class WhiskyCategoryAdmin(admin.ModelAdmin):
    list_display = ("category_name", )

admin.site.register(WhiskyCategory, WhiskyCategoryAdmin)

@admin.register(Whisky)
class WhiskyAdmin(admin.ModelAdmin):
	list_display = ("name_eng", "name_kor",  "category", "distillery", "bottler", "bottle_type", "vintage", "age", "cask", "casknumber", "alcohol", "whisky_detail")
	search_fields = ["name", "distillery", "age"]

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
	list_display = ("id", "kor_tag", "eng_tag")

class ReactionAdmin(admin.ModelAdmin):
	model = Reaction
	filter_horizontal = ('nose_tag', 'taste_tag', 'finish_tag')
admin.site.register(Reaction, ReactionAdmin)

@admin.register(ReactionComment)
class ReactionCommentAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "review", "comment_body", "created_at", "modified_at")
    
@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):
    list_display = ("user", "whisky", "created_at")

@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ("user", "whisky", "created_at")
