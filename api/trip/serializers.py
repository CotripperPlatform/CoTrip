from .models import Trip, Activity
from rest_framework import serializers


class TripSerializer(serializers.HyperlinkedModelSerializer):
    activities = serializers.HyperlinkedRelatedField(
        view_name='activity_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Trip
        fields = ('title', 'start_date', 'end_date', 'duration_days',
                  'type_of_stay', 'activities', 'children_welcome')


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    trip = serializers.HyperlinkedRelatedField(
        view_name='trip_detail',
        many=False,
        read_only=True
    )

    class Meta:
        model = Activity
        fields = ('trip', 'activity', 'appropriate_for_kids')
