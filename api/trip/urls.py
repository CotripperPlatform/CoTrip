from django.urls import path
from .views import LocationList

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
]
