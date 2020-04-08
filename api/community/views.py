from django.shortcuts import render
from .models import Group, Topic, Hashtag, Media, Event
from rest_framework import generics, permissions
from .serializers import GroupSerializer, TopicSerializer, HashtagSerializer, MediaSerializer, EventSerializer

class GroupList(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permissions_classes = (permissions.IsAuthenticated)

class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permissions_classes = (permissions.IsAuthenticated)

class TopicList(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permissions_classes = (permissions.IsAuthenticated)
    
class TopicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permissions_classes = (permissions.IsAuthenticated)

class HashtagList(generics.ListCreateAPIView):
    queryset = Hashtag.objects.all()
    serializer_class = HashtagSerializer
    permissions_classes = (permissions.IsAuthenticated)
    
class HashtagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hashtag.objects.all()
    serializer_class = HashtagSerializer
    permissions_classes = (permissions.IsAuthenticated)

class MediaList(generics.ListCreateAPIView):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    permissions_classes = (permissions.IsAuthenticated)

class MediaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    permissions_classes = (permissions.IsAuthenticated)

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions_classes = (permissions.IsAuthenticated)

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions_classes = (permissions.IsAuthenticated)