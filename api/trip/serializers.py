from .models import Trip, Activity
from rest_framework import serializers


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('trip', 'activity', 'appropriate_for_kids')


class TripSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(
        many=True,
    )

    class Meta:
        model = Trip
        fields = ('title', 'start_date', 'end_date', 'duration_days',
                  'type_of_stay', 'activities', 'children_welcome')
