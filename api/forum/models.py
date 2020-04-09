from django.db import models
from accounts.models import Profile


class Post(models.Model):
    parent = models.ForeignKey('self', related_name='comments', on_delete=models.CASCADE, null=True, blank=True, default=1)
    post_type = models.CharField(max_length=200, null=True, blank=True)
    title = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=1000)
    likes = models.IntegerField(default=0)
    author = models.ForeignKey(Profile,
                               on_delete=models.CASCADE, related_name='posts', null=True)

    def __str__(self):
        return self.title
