from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Profile, CustomUser, ProfileSocialMedia, SocialMediaType
from django.dispatch import receiver
from django.db.models.signals import post_save


class SocialMediaTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaType
        fields = '__all__'


class ProfileSocialMediaSerializer(serializers.ModelSerializer):
    social_media_type = SocialMediaTypeSerializer(many=True, read_only=True)

    class Meta:
        model = ProfileSocialMedia
        fields = ['social_media_type', 'url', 'profile']


class ProfileSerializer(serializers.ModelSerializer):
    social_media = ProfileSocialMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'topics', 'hashtags', 'image', 'first_name', 'last_name', 'city_of_residence',
                  'age', 'dream_destination', 'bio', 'activities', 'events', 'connections', 'social_media']


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
