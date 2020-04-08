from django.urls import path
from django.conf.urls import include
from .views import PostList, PostDetail, CommentDetail, CommentList, ReplyDetail, ReplyList


urlpatterns = [
    path('posts', PostList.as_view(), name='post_list'),
    path('posts/<int:pk>', PostDetail.as_view(), name='post_detail'),
    path('comments', CommentList.as_view(), name='comment_list'),
    path('comments/<int:pk>', CommentDetail.as_view(), name='comment_detail'),
    path('replies', ReplyList.as_view(), name='reply_list'),
    path('replies/<int:pk>', ReplyDetail.as_view(), name='reply_detail')
]
