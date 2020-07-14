from rest_framework import serializers
from .models import Group, Event, Topic, Hashtag, Media
from forum.serializers import PostSerializer


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    group = serializers.CharField()
    location = serializers.CharField()

    class Meta:
        model = Event
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    TopicPosts = PostSerializer(many=True)

    class Meta:
        model = Topic
        depth = 1
        fields = ['id', 'title', 'description', 'TopicPosts']


class HashtagSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Hashtag
        depth = 1
        fields = ['id', 'title', 'description', 'posts']


class MediaSerializer(serializers.ModelSerializer):
    hashtag = serializers.CharField()
    group = serializers.CharField()

    class Meta:
        model = Media
        fields = '__all__'
