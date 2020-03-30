from django.shortcuts import render, redirect
from .models import Location
from rest_framework import generics
from .serializers import LocationSerializer
from rest_framework import permissions
# Create your views here.

class LocationList(generics.ListApiView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = BookSerializer
    permission_classes = (permissions.IsAuthenticated)

