from django.db import models

# Create your models here.

class Group(models.Model):
    # can't add Location in until model exists in trip app
    # location = models.ForeignKey('trip.Location', on_delete=models.CASCADE, related_name='groups', null=True)
    title = models.CharField(max_length=200)
    members = models.ManyToManyField('accounts.CustomUser', blank=True)
# Posts: one to many with post model
#         (should be) taken care of in the Post model

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200)
    members = models.ManyToManyField('accounts.CustomUser', blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='events', null=True)
    # location = models.ForeignKey('trip.Location', on_delete=models.CASCADE, related_name='events', null=True)
    
    def __str__(self):
        return self.title

class Topic(models.Model):
    # there is a Topic model already in cotrip_app, but I've added it here too because it's included in this issue request. Should be updated in accounts.Profile when location of Topic model is decided upon
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

# Followers: Many to many with user
#       taken care of in accounts.Profile
# Post: one to many with post
#       (should be) taken care of in the Post model

class Hashtag(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.title

# Followers: Many to many with user
#       (should be) taken care of in accounts.Profile
# Post: one to many with post
#       (should be) taken care of in the Post model


class Media(models.Model):
    # title and file are required. hashtags, topics, and groups are optional
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media')
    hashtags = models.ManyToManyField(Hashtag, blank=True)
    topics = models.ManyToManyField(Topic, blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='media', null=True, blank=True)

    def __str__(self):
        return self.title