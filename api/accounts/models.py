from django.db import models
from django.contrib.auth.models import AbstractUser
from django.apps import apps
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE, primary_key=True
    )
    topics = models.ManyToManyField('cotrip_app.Topic')
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    city_of_residence = models.CharField(max_length=200, blank=True)
    age = models.IntegerField(blank=True, null=True)
    dream_destination = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    instagram_url = models.URLField(blank=True)
    pinterest_url = models.URLField(blank=True)
    facebook_url = models.URLField(blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} Profile'
