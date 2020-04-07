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
    topics = models.ManyToManyField(
        'community.Topic', related_name='followers', null=True, blank=True)
    hashtags = models.ManyToManyField(
        'community.Hashtag', related_name='followers', null=True, blank=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    city_of_residence = models.ForeignKey(
        'trip.Location', on_delete=models.CASCADE, related_name='people', null=True, blank=True)
    age = models.IntegerField(blank=True, null=True)
    dream_destination = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    activities = models.ManyToManyField(
        'trip.Activity', related_name='people', null=True, blank=True)
    events = models.ManyToManyField(
        'trip.Event', related_name='people', null=True, blank=True)
    connections = models.ManyToManyField(
        'self', related_name='friends', null=True, blank=True)
    # Posts, comments, and replies to be defined as foreign key on those respective models within forum app
    # CoTrip media defined as foreign key in community app

    def __str__(self):
        return f'{self.first_name} {self.last_name} Profile'


class ProfileSocialMedia(models.Model):
    type = models.ForeignKey(Social_Media_Type, on_delete=models.CASCADE,
                             related_name='profile social media', null=True, blank=True)
    url = models.URLField(blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE,
                                related_name='social media', null=True, blank=True)

    def __str__(self):
        return self.type


class SocialMediaType(models.Model):
    name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name
