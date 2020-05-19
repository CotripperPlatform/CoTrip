from rest_framework import serializers
from .models import Location, Trip, Activity, State, Country
from accounts.serializers import UserSerializer



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        
class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'
class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class TripSerializer(serializers.ModelSerializer):
    locations = LocationSerializer(many=True, read_only=True)
    activities = ActivitySerializer(many=True, read_only=True)
    # Not sure is need populate the attendees' information or not,
    # Because some info maybe should not show to others.
    # Currently, It just populate the attendees' all information
    attendees = UserSerializer(many=True, read_only=True)
    class Meta:
        model = Trip
        fields = '__all__'
           
