from django.urls import path
from .views import *

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
    # path('trip', TripList.as_view(), name='trip_list'),
    # change the trip list route trip to trips
    path('trips', TripList.as_view(), name='trip_list'),

    # add the route for search trips (search by title, start_date, end_date)
    path('trips/search', TripSearch.as_view(), name='trip_search'),
    path('trips/upcoming', TripUpcomingList.as_view(), name='trip_upcoming_list'),
    
    path('activity', ActivityList.as_view(), name='activity_list')
]
