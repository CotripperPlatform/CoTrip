from rest_framework import serializers
from .models import Group, Event, Topic, Hashtag, Media
from forum.serializers import PostSerializer


class GroupSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Group
        depth = 1
        fields = ['title', 'description', 'location', 'posts', 'members']


class EventSerializer(serializers.ModelSerializer):
    group = serializers.CharField()
    location = serializers.CharField()

    class Meta:
        model = Event
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'


class HashtagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hashtag
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    hashtag = serializers.CharField()
    group = serializers.CharField()

    class Meta:
        model = Media
        fields = '__all__'
