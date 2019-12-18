from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer,ProfileSerializer
from .models import Profile, CustomUser


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        profile_data = request.data.pop('profile')
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        profile = Profile.objects.create(user=user, **profile_data)
        
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
        
# Example json input for RegisterAPI^^^

# {
#     "email": "bigguy@gmail.com",
#     "password": "airtravel",
#     "profile": {
#         "image": "http://127.0.0.1:8000/media/default.jpg",
#         "first_name": "Mike",
#         "last_name": "J",
#         "city_of_residence": "Chicago",
#         "age": 50,
#         "dream_destination": "Chicago",
#         "bio": "I hang out with loony tunes",
#         "instagram_url": "",
#         "pinterest_url": "",
#         "facebook_url": ""
#     }
# }



class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer


    def get_object(self):
        return self.request.user

class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
class ProfileUpdate(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfileSerializer
    
    def get_object(self):
        return self.request.user.profile
    


# not added to urls VVV
class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
    
# add view to update a profile, it should only allow a profile to be updated when they have a token saying theyre logged in

