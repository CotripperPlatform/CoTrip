from django.db import models
from django.contrib.auth.models import User
from django.apps import apps


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE, primary_key=True
    )
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)

    city_of_residence = models.CharField(max_length=200, blank=True)
    age = models.IntegerField(blank=True)
    dream_destination = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    instagram_url = models.URLField(blank=True)
    pinterest_url = models.URLField(blank=True)
    facebook_url = models.URLField(blank=True)

    def __str__(self):
        return f' Profile'
