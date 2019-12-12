from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'password', 'email')


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)
