from django.urls import path
from . import views

urlpatterns = [
    path('trips/', views.TripList.as_view(), name='trip_list'),
    path('activities/', views.ActivityList.as_view(), name='activity_list'),
    path('trips/<int:pk>', views.TripDetail.as_view(), name='trip_detail'),
    path('activities/<int:pk>', views.ActivityDetail.as_view(),
         name='activity_detail'),
    path('trips/new', views.TripList.as_view(), name='trips_create'),
    path('activities/new', views.ActivityList.as_view(), name='activity_create'),
    path('trips/<int:pk>/edit', views.TripDetail.as_view(), name='trip_edit'),
    path('activities/<int:pk>/edit',
         views.ActivityDetail.as_view(), name='activity_edit'),
    path('trips/<int:pk>/delete',
         views.TripDetail.as_view(), name='trip_delete'),
    path('activities/<int:pk>/delete',
         views.ActivityDetail.as_view(), name='activity_delete')
]
