from rest_framework import serializers
# from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Profile, CustomUser
from django.dispatch import receiver
from django.db.models.signals import post_save

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': False, 'required': True},
            'slug': {'validators': []},
        }
        # fields = ("image", "first_name", "last_name", "city_of_residence", "age", "dream_destination", "bio", "instagram_url", "pinterest_url", "facebook_url")

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'profile')
        depth = 1
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile_update = validated_data.get('profile')
        profile_instance = profile.objects.get(user=instance)
        
        inv_item.name = item.get('name', inv_item.name)
        inv_item.price = item.get('price', inv_item.price)
        inv_item.save()

        return instance


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

@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=CustomUser)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()