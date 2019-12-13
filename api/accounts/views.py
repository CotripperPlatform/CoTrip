
from django.shortcuts import render, redirect
from rest_framework import generics
from .serializers import UserSerializer, TokenSerializer, ProfileSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Profile



class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
