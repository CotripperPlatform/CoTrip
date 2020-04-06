from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import LocationSerializer, TripSerializer, ActivitySerializer
from .models import Location, Trip, Activity

class LocationList(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = ProfileSerializer

class TripList(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = ProfileSerializer
    
class ActivityList(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer