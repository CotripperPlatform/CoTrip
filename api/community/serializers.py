from rest_framework import serializers
from .models import Group, Event, Topic, Hashtag, Media

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
    class Mœeta:
        model = Topic
        fields = '__all__'

class HashtagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hashtag
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    hashtag = serializers.CharField()
    group = serializers.CharField()
    topics = serializers.HyperlinkRelatedField(many=True, )
    class Meta:
        model = Media
        fields = '__all__'