from django.urls import path
from django.conf.urls import include
from .views import RegisterAPI, LoginAPI, UserAPI, ProfileList, ProfileDetail, ProfileUpdate, sign_s3
from knox import views as knox_views

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('profile', ProfileList.as_view(), name='profile_list'),
    path('profile/<int:pk>', ProfileDetail.as_view(), name='profile_detail'),
    path('profile/update', ProfileUpdate.as_view(), name='profile_update'),
    path('sign_s3', sign_s3)
]
