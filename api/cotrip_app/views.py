from rest_framework import generics, permissions
from .serializers import CitySerializer, TopicSerializer
from .models import City, Topic
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, DeleteView, UpdateView


class CityList(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # permission_classes = (permissions.IsAuthenticated)


class CityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # permission_classes = (permissions.IsAuthenticated)


class TopicList(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    # permission_classes = (permissions.IsAuthenticated)


class TopicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    # permission_classes = (permissions.IsAuthenticated)
