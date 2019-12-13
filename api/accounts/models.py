from django.db import models
from django.contrib.auth.models import User
from django.apps import apps
# from ..cotrip_app.models import Topic


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE, primary_key=True
    )

    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, default='')
    last_name = models.CharField(max_length=200, default='')
    city_of_residence = models.CharField(max_length=200, default='')
    # topics = models.ManyToManyField(Topic)
    # add connections, list of users?
    age = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.first_name} {self.last_name} Profile'
