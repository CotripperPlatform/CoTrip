from django.urls import path
from django.conf.urls import include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views
from .views import ProfileList, ProfileDetail

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('profile', ProfileList.as_view(), name='profile_list'),
    path('profile/<int:pk>', ProfileDetail.as_view(), name='profile_detail')
]
