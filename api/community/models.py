from django.db import models

# Create your models here.

class Group(models.model):
    location = models.ForeignKey('trip.Location', on_delete=models.CASCADE, related_name='groups', null=True)
    title = models.CharField(max_length=200)
    members = models.ManyToManyField('accounts.CustomUser')
# Events: one to many with events model 
#         taken care of in Event model
# Posts: one to many with post model
#         (should be) taken care of in the Post model
# Media: One to many with media model 
#         not clear on media model yet

    __str__(self):
    return self.title

class Event(models.model):
    #Do I need all events, past and future, when I query a group? No. therefore, add group in here and filter events by group.
    title = models.CharField(max_length=200)
    members = models.ManyToManyField('accounts.CustomUser')
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='events', null=True)
    location = models.ForeignKey('trip.Location', on_delete=models.CASCADE, related_name='events', null=True)
    
    def __str__(self):
        return self.title

class Topic(models.model):
    # there is a Topic model already in cotrip_app, but I've added it here too because of issue request. Should be updated in accounts.Profile when location of Topic model is finalized 
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

# Followers: Many to many with user
#       taken care of in accounts.Profile
# Post: one to many with post
#       (should be) taken care of in the Post model
# Media: one to many with media 
#       not clear on media model yet

class Hashtag(models.model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

# Posts: one to many with post
# Media: many to many with media
# Followers: many to many with user


# Media
# Image url
# Hashtags
# Topic