from django.db import models
from django.contrib.auth.models import User
from django.apps import apps
from ..cotrip_app.models import Topic



class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    # add profile pic, its a must
    # add connections, list of users?
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    city_of_residence = models.CharField(max_length=200)
    # topics = models.ManyToManyField(Topic)
    age = models.IntegerField()

    def __str__(self):
        return self.first_name + " " + self.last_name


