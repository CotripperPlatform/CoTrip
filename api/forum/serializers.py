from rest_framework import serializers
from .models import Post
from accounts.serializers import ProfileSerializer, UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = ProfileSerializer()

    class Meta:
        model = Post
        depth = 2
        fields = ['id', 'parent',  'post_type', 'title',
                  'time', 'body', 'likes', 'author', 'group']
