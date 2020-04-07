from django.db import models

# Create your models here.


class Group(models.Model):
    # Location defined in trip.models
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500, blank=True, null=True)
# Members defined in account.models in Profile model
# Posts: one to many with post model
#         (should be) taken care of in the Post model

    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.CharField(max_length=200)
# Members defined in account.models in Profile model
    group = models.ForeignKey(
        Group, on_delete=models.CASCADE, related_name='events', null=True)
    location = models.ForeignKey(
        'trip.Location', on_delete=models.CASCADE, related_name='events', null=True)

    def __str__(self):
        return self.title


class Topic(models.Model):
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


class Media(models.Model):
    # title and file are required. hashtags, topics, and groups are optional
    author = models.ForeignKey(
        'accounts.Profile', on_delete=models.CASCADE, related_name='cotripper_media', null=True, blank=True)
    time = models.DateField(auto_now_add=True, blank=True)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media')
    topics = models.ManyToManyField(Topic, blank=True)
    hashtag = models.ForeignKey(
        Hashtag, on_delete=models.CASCADE, related_name='media', null=True, blank=True)
    group = models.ForeignKey(
        Group, on_delete=models.CASCADE, related_name='media', null=True, blank=True)

    def __str__(self):
        return self.title
