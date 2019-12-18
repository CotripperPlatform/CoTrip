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
        # fields = ("image", "first_name", "last_name", "city_of_residence", "age", "dream_destination", "bio", "instagram_url", "pinterest_url", "facebook_url")

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'profile')
        extra_kwargs = {
            'profile': {'validators': []},
        }
        
    
    def create(self, validated_data):
        print('\n---\nhello world! Its me!\n---\n')
        profile_data = validated_data.pop("profile") # removes and stores the profile data from the inputed, validated data
        user = CustomUser.objects.create(**validated_data) # creates the new CustomUser object
        profile_keys_dictionary = profile_data.keys() # stores a list with all the keys of the profile_data dictionary
        profile = Profile.objects.create(user=user, **profile_data) # creates a new Profile object assigned to the new user
        
        # for key in profile_keys_dictionary: # loops through each key for the profile_data dictionary
        #     profile[key] = profile_data[key] # assigns the specific key of the new profile to the inputed data at that key
        return user
    
    def update(self, instance, validated_data):
        instance.email = validated_data.get("email", instance.email) # updates email, if no email given then remains the same
        profile_data = validated_data.pop("profile") # removes and stores profile data
        # instance.save() # saves the object
        profile_keys = profile_data.keys() # retrieves the dictionary keys of profile
        
        for key in profile_keys: # loops through profile keys
            instance.profile[key] = profile_data.get(f"{key}", instance.profile[key]) # sets each key of the instance's profile to its respective value in profile data. if there is no new value then it is not changed
        instance.save() # saves object
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

# @receiver(post_save, sender=CustomUser)
# def create_profile(sender, instance, created, **kwargs):
#     if created:
#         profile = Profile.objects.create(user=instance)

# @receiver(post_save, sender=CustomUser)
# def console_log(sender, instance, created, **kwargs):
#     print(instance)

# @receiver(post_save, sender=CustomUser)
# def save_profile(sender, instance, **kwargs):
#     instance.profile.save()
    
# add receiver that when the user is created, a profile is also created from the request object which should include a profile field with a dictionary with all fields necascary to build a profile