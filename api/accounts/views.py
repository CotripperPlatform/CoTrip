from rest_framework import generics, permissions
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer,ProfileSerializer
from .models import Profile, CustomUser
import os
import boto3
from django.http import JsonResponse

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
    
class ProfileUpdate(generics.RetrieveUpdateAPIView, UpdateModelMixin):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfileSerializer
    
    def get_object(self):
        return self.partial_update(self, self.request)
    
    
# not added to urls VVV
class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
    
# add view to update a profile, it should only allow a profile to be updated when they have a token saying theyre logged in

def sign_s3(request):
  S3_BUCKET = os.environ.get('S3_BUCKET_NAME')

  file_name = request.GET['file_name']
  file_type = request.GET['file_type']

  s3 = boto3.client('s3')

  presigned_post = s3.generate_presigned_post(
    Bucket = S3_BUCKET,
    Key = file_name,
    Fields = {"acl": "public-read", "Content-Type": file_type},
    Conditions = [
      {"acl": "public-read"},
      {"Content-Type": file_type}
    ],
    ExpiresIn = 3600
  )

  return JsonResponse({
    'data': presigned_post,
    'url': 'https://%s.s3.amazonaws.com/%s' % (S3_BUCKET, file_name)
  })