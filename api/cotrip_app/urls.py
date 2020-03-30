from django.urls import path
from django.conf.urls import include
from .views import LocationList, LocationDetail
from knox import views as knox_views

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
    path('location/<int:pk>', LocationDetail.as_view(), name='location_detail'),
]