from .models import Trip, Activity
from rest_framework import serializers


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('trip', 'activity', 'appropriate_for_kids')


class TripSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(
        many=True,
        # read_only=True
    )

    class Meta:
        model = Trip
        fields = ('title', 'start_date', 'end_date', 'duration_days',
                  'type_of_stay', 'activities', 'children_welcome')

    def create(self, validated_data):
        activity_data = validated_data.pop('trip_activities')
        trip = Trip.objects.create(**validated_data)
        for activity_data in activity_data:
            Activity.objects.create(trip=trip, **activity_data)
        return trip


