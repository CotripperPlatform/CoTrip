from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('profiles/', views.ProfileList.as_view(), name="profile-list"),
    path('profiles/<int:pk>/update',
         views.ProfileDetail.as_view(), name="update-profile"),
]


