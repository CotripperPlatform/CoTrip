from django.urls import path
from .views import LocationList, TripList, ActivityList,TripSearch

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
    # path('trip', TripList.as_view(), name='trip_list'),

    # change the trip list route name to trips
    path('trips', TripList.as_view(), name='trip_list'),
    path('trips/search', TripSearch.as_view(), name='trip_search'),
    path('activity', ActivityList.as_view(), name='activity_list')
]
