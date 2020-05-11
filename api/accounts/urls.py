from django.urls import path
from django.conf.urls import include
from .views import RegisterAPI, LoginAPI, UserAPI, ProfileList, ProfileDetail, ProfileUpdate, ProfileSocialMediaList, ProfileSocialMediaDetail, SocialMediaTypeList, SocialMediaTypeDetail, sign_s3
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
    path('profile_social_media', ProfileSocialMediaList.as_view(),
         name='profile_social_media_list'),
    path('profile_social_media/<int:pk>', ProfileSocialMediaDetail().as_view(),
         name='profile_social_media_detail'),
    path('social_media_type', SocialMediaTypeList.as_view(),
         name='social_media_type_list'),
    path('social_media_type/<int:pk>', SocialMediaTypeDetail().as_view(),
         name='social_media_type_detail'),
    path('sign_s3', sign_s3)
    path('subscribers', SubscriberAPI.as_view(), name='subscibers_list')
]
