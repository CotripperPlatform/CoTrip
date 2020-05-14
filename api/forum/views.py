from django.shortcuts import render
from .models import Post
from rest_framework import generics, permissions
from .serializers import PostSerializer
from .permissions import IsOwnerOrReadOnly


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated,)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permissions_classes = ( IsOwnerOrReadOnly,)
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user.id)
        

