from django.contrib import admin
from .models import Profile, CustomUser, ProfileSocialMedia

admin.site.register(Profile)
admin.site.register(CustomUser)
admin.site.register(ProfileSocialMedia)
