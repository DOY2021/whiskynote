from django.contrib import admin
from api.models import Profile, WhiskyCategory, Whisky, Reaction, Follow, Tag, Collection, Wishlist, ReactionComment

#WhiskyImage
from api.models import WhiskyImage

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
    list_display = ("id", "category_name")


#WhiskyImageInline
class WhiskyImageInline(admin.StackedInline):
    model = WhiskyImage
    con_delete = False

admin.site.register(WhiskyCategory, WhiskyCategoryAdmin)

@admin.register(Whisky)
class WhiskyAdmin(admin.ModelAdmin):
    list_display = ("name_eng", "name_kor",  "category", "contributor", "created_at", "updated_at")
    inlines = [WhiskyImageInline, ]
    #admin 오류 방지를 위해 DB 업데이트 끝날때까지 list_display field 수 제한
    search_fields = ("name", "distillery", "age")

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
	list_display = ("id", "kor_tag", "eng_tag")

class ReactionAdmin(admin.ModelAdmin):
	model = Reaction
	#filter_horizontal = ("flavor_tag")
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
