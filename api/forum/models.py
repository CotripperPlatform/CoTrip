from django.db import models
from accounts.models import Profile

class Post(models.Model):
    title = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=1000)
    likes = models.IntegerField(default=0)
    author = models.OneToOneField(Profile,
        on_delete=models.CASCADE, primary_key=True
    )
    

    def __str__(self):
        return self.title


class Comment(models.Model):
    time = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=500)
    likes = models.IntegerField(default=0)
    author = models.OneToOneField(Profile,
        on_delete=models.CASCADE, primary_key=True
    )
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post', null=True, blank=True)

    def __str__(self):
        return self.body


class Reply(models.Model):
    time = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=500)
    likes = models.IntegerField(default=0)
    author = models.OneToOneField(Profile,
        on_delete=models.CASCADE, primary_key=True
    )
    comments = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='comments', null=True, blank=True)

    def __str__(self):
        return self.body

