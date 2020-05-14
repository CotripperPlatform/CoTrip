from django.urls import path
from .views import *

urlpatterns = [
    path('location', LocationList.as_view(), name='location_list'),
    path('location/<int:pk>', LocationDetail.as_view(), name='location_detail'),
    # path('trip', TripList.as_view(), name='trip_list'),
    
    # 1. Change the trip list route name from 'trip' to 'trips'
    # 2. Add the search feature for the list route, user can search list by title, start_date, end_date
    #    When searching by condition, the api url format: trips?title=XXX&start_date=XXX&end_date=XXX
    path('trips', TripList.as_view(), name='trip_list'),

    # Route for Upcoming Trips
    #   When searching by condition, the api url format: trips/upcoming?title=XXX&start_date=XXX&end_date=XXX
    path('trips/upcoming', TripUpcomingList.as_view(), name='trip_upcoming_list'),
 
    path('trips/<int:pk>', TripDetail.as_view(), name='trip_detail'),
    path('activity', ActivityList.as_view(), name='activity_list'),
    path('activity/<int:pk>', ActivityDetail.as_view(), name='activity_detail')
]
