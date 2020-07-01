from django.contrib import admin
from .models import Profile, CustomUser, SocialMediaType

admin.site.register(Profile)
admin.site.register(CustomUser)
admin.site.register(SocialMediaType)
