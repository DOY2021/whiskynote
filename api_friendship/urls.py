from __future__ import unicode_literals
from api.views import FriendViewSet, FriendRequestViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'friends', FriendViewSet, basename='friends')
router.register(r'friendrequeste', FriendRequestViewSet, basename='friendrequests')
urlpatterns = router.urls
