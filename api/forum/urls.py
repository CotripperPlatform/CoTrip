from django.urls import path
from django.conf.urls import include
from .views import PostList, PostDetail


urlpatterns = [
    path('posts', PostList.as_view(), name='post_list'),
    path('posts/<int:pk>', PostDetail.as_view(), name='post_detail')
]
