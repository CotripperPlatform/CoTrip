from django.urls import path
from django.conf.urls import include
from .views import GroupList, GroupDetail, MediaDetail, MediaList, HashtagList, HashtagDetail, EventDetail, EventList, TopicDetail, TopicList 


urlpatterns = [
    path('groups', GroupList.as_view(), name='group_list'),
    path('groups/<int:pk>', GroupDetail.as_view(), name='group_detail'),
    path('media', MediaList.as_view(), name='media_list'),
    path('media/<int:pk>', MediaDetail.as_view(), name='media_detail'),
    path('hashtags', HashtagList.as_view(), name='hashtag_list'),
    path('hashtags/<int:pk>', HashtagDetail.as_view(), name='hashtag_detail'),
    path('events', EventList.as_view(), name='event_list'),
    path('events/<int:pk>', EventDetail.as_view(), name='event_detail'),
    path('topics', TopicList.as_view(), name='topic_list'),
    path('topics/<int:pk>', TopicDetail().as_view(), name='topic_detail')

]