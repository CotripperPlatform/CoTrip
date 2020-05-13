from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import LocationSerializer, TripSerializer, ActivitySerializer, StateSerializer
from .models import Location, Trip, Activity, State
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .filter import TripFilter
from datetime import date

class LocationList(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class StateList(generics.ListAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer

class CitiesListByState(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    filter_backends = (DjangoFilterBackend)
    filterset_fields = ('state__code')

class TripList(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    
    filter_backends = ( DjangoFilterBackend, OrderingFilter)
    # filter the list by customized filter class TripFilter
    filterset_class = TripFilter
    '''
    Sort the result list
    First, sorts the list by start_date with positive sequence, then sorts the list by end_date with positive sequence
        It means, If some trip's start_date are equal, the sort the end_date with positive sequence
    '''
    ordering_fields = ("start_date","end_date",)
    ordering = ('start_date',"end_date",)
    

class TripUpcomingList(generics.ListAPIView):
    # get the list which its' start_date greate than today
    queryset = Trip.objects.filter(start_date__gt=date.today())
    serializer_class = TripSerializer

    filter_backends = ( DjangoFilterBackend, OrderingFilter)
    filterset_class = TripFilter
    ordering_fields = ("start_date","end_date",)
    ordering = ('start_date',"end_date",)
    
class ActivityList(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer