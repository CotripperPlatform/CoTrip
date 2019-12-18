from django.urls import path
from . import views

urlpatterns = [
    path('', views.TripList.as_view(), name='trip_list'),
    path('<int:pk>', views.TripDetail.as_view(), name='trip_detail'),
    path('new', views.TripList.as_view(), name='trips_create'),
    path('<int:pk>/edit', views.TripDetail.as_view(), name='trip_edit'),
    path('<int:pk>/delete',
         views.TripDetail.as_view(), name='trip_delete'),
    # /trip/activity
    path('activity/', views.ActivityList.as_view(), name='activity_list'),
    path('activity/<int:pk>', views.ActivityDetail.as_view(),
         name='activity_detail'),
    path('activity/new', views.ActivityList.as_view(), name='activity_create'),
    path('activity/<int:pk>/edit',
         views.ActivityDetail.as_view(), name='activity_edit'),
    path('activity/<int:pk>/delete',
         views.ActivityDetail.as_view(), name='activity_delete')
]