from django.db import models
from accounts.models import Profile
from community.models import Group


class Post(models.Model):
    parent = models.ManyToManyField(
        'self', related_name='comments', symmetrical=False, null=True, blank=True)
    post_type = models.CharField(max_length=200, null=True, blank=True)
    title = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=1000)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(Profile,
                               on_delete=models.CASCADE, related_name='posts', null=True)
    group = models.ForeignKey(
        Group, on_delete=models.CASCADE, related_name='posts', null=True, blank=True)

    hashtags = models.ManyToManyField(
        'community.hashtag', related_name='posts', null=True, blank=True)
    topics = models.ManyToManyField(
        'community.hashtag', related_name='TopicPosts', null=True, blank=True)

    def __str__(self):
        return self.title
