from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile


class UserSerializer(serializers.ModelSerializer):
    # add hyperlinked related fields to create profile when creating user
    class Meta:
        model = User
        fields = ('username', 'password', 'email', Profile)


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)


class ProfileSerializer(serializers.Serializer):

    class Meta:
        model = Profile
        fields = ("first_name", "last_name", "city_of_residence", "topics")
