from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Profile, CustomUser, ProfileSocialMedia, SocialMediaType
from django.dispatch import receiver
from django.db.models.signals import post_save


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'profile')
        extra_kwargs = {
            'profile': {'validators': []},
        }


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            validated_data['email'], validated_data['password'])
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user


class ProfileSocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileSocialMedia
        fields = '__all__'


class SocialMediaTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaType
        fields = '__all__'
