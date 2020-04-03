from django.db import models

# Create your models here.

class Group(models.model):

# Location: many to one with location model
# Title:
# Members: many to many with profile model
# Events: one to many with events model
# Posts: one to many with post model
# Media: One to many with media model

class Event(models.model):
    #Do I need all events, past and future, when I query a group? No. therefore, add group in here and filter events by group.
    title = models.CharField(max_length=200)
    members = models.ManyToManyField('accounts.CustomUser')
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='events', null=True)
    location = models.ForeignKey('trip.Location', on_delete=models.CASCADE, related_name='events', null=True)
    
    def __str__(self):
        return self.title

class Topic (models.model):
# Title
# Description
# Followers: Many to many with user
# Post: one to many with post
# Media: one to many with media

class Hashtag(models.model):
# Title
# Description
# Posts: one to many with post
# Media: many to many with media
# Followers: many to many with user
# Media
# Image url
# Hashtags
# Topic