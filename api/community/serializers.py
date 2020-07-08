from rest_framework import serializers
from .models import Group, Event, Topic, Hashtag, Media
from forum.serializers import PostSerializer


class GroupSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Group
        depth = 1
        fields = ['id', 'title', 'description', 'location', 'posts', 'members']


class EventSerializer(serializers.ModelSerializer):
    group = serializers.CharField()
    location = serializers.CharField()

    class Meta:
        model = Event
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Topic
        depth = 1
        fields = ['id', 'title', 'description', 'posts']


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
