from rest_framework import generics, permissions
from .serializers import TripSerializer, ActivitySerializer
from .models import Trip, Activity
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, DeleteView, UpdateView


class TripList(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    # permission_classes = (permissions.IsAuthenticated)


class TripDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    # permission_classes = (permissions.IsAuthenticated)


class ActivityList(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    # permission_classes = (permissions.IsAuthenticated)


class ActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    # permission_classes = (permissions.IsAuthenticated)
