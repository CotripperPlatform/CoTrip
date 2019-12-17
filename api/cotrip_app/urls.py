from django.urls import path
from . import views

urlpatterns = [
    path('city/', views.CityList.as_view(), name='city_list'),
    path('city/<int:pk>', views.CityDetail.as_view(), name='city_detail'),
    path('city/new', views.CityList.as_view(), name='city_create'),
    path('city/<int:pk>/edit', views.CityDetail.as_view(), name='city_edit'),
    path('city/<int:pk>/delete',
         views.CityDetail.as_view(), name='city_delete'),
    path('topic/', views.TopicList.as_view(), name='topic_list'),
    path('topic/<int:pk>', views.TopicDetail.as_view(),
         name='topic_detail'),
    path('topic/new', views.TopicList.as_view(), name='topic_create'),
    path('topic/<int:pk>/edit',
         views.TopicDetail.as_view(), name='topic_edit'),
    path('topic/<int:pk>/delete',
         views.TopicDetail.as_view(), name='topic_delete')
]
