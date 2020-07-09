from rest_framework import serializers
from .models import Post
from accounts.serializers import ProfileSerializer, UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = ProfileSerializer()

    class Meta:
        model = Post
        fields = '__all__'
