from django.urls import path
from . import views

urlpatterns = [
    path('city/', views.CityList.as_view(), name='city_list'),
    path('city/<int:pk>', views.CityDetail.as_view(), name='city_detail'),
    path('topic/', views.TopicList.as_view(), name='topic_list'),
    path('topic/<int:pk>', views.TopicDetail.as_view(),
         name='topic_detail'),
]
