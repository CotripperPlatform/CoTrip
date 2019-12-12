from django.db import models
from django.contrib.auth.models import User
from django.apps import apps
Topic = apps.get_model('cotrip_app', 'Topic')


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    city_of_residence = models.CharField(max_length=200)
    topics = models.ManyToManyField(Topic)
    age = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(18)])

    def __str__(self):
        return self.first_name + " " + self.last_name
