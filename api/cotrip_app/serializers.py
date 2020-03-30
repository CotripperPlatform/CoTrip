from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Location
from django.dispatch import receiver
from django.db.models.signals import post_save

class LocationSerializer(serializers.ModelSerializer):
    location_url = serializers.ModelSerializer.serializer_url_field(view_name="location_detail")

    class Meta:
        model = Location
        fields = ('id', 'city', 'state', 'country', 'latidude', 'longitude')