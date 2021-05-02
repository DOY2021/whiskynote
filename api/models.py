from django.conf import settings

from django.db import models

from rest_framework.authtoken.models import Token as DefaultTokenModel

from .utils import import_callable

from django.contrib.auth.models import User
from datetime import datetime
TokenModel = import_callable(
    getattr(settings, 'REST_AUTH_TOKEN_MODEL', DefaultTokenModel))
'''
def user_path(instance, filename):
	from random import choice
	import string
	arr = [choice(string.ascii_letters) for _ in range(8)]
	pid = ''.join(arr)
	extension = filename.split('.')[-1]
	return '%s/%s.%s' %(instance.owner.username, pid, extension)
'''
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete= models.CASCADE)
	nickname = models.CharField(max_length = 64)
	bio = models.CharField(max_length = 240, blank = True)
	profile_photo = models.ImageField(null = True, blank=True)
	created_at = models.DateTimeField(auto_now_add = True, editable=False)
	updated_at = models.DateTimeField(auto_now = True,)

	def __str__(self):
		return self.user.username
'''
class ProfileStatus(models.Model):
	user_profile = models.ForeignKey(Profile, on_delete = models.CASCADE)
	status_content = models.CharField(max_length = 240)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	class Meta :
		verbose_name_plural = "statuses"

	def __str__(self):
		return str(self.user_profile)
'''

