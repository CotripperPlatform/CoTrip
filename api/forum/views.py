from django.shortcuts import render
from .models import Post
from rest_framework import generics, permissions
from .serializers import PostSerializer



class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated,)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user.id)
        

