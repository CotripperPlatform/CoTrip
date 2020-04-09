from django.shortcuts import render
from .models import Post
from rest_framework import generics, permissions
from .serializers import PostSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permissions_classes = (permissions.IsAuthenticated)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permissions_classes = (permissions.IsAuthenticated)

