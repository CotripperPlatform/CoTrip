from django.urls import path
from .views import LocationList, TripList, ActivityList

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
    path('trip', TripList.as_view(), name='trip_list'),
    path('activity', ActivityList.as_view(), name='activity_list')
]
