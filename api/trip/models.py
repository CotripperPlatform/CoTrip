from django.db import models


class Trip(models.Model):
    title = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    duration_days = models.IntegerField(default=7)
    type_of_stay = models.CharField(max_length=100)
    children_welcome = models.BooleanField(default=True)
    banner_image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.title


class Activity(models.Model):
    trip = models.ForeignKey(
        Trip, on_delete=models.PROTECT, related_name='activities')
    activity = models.CharField(max_length=250)
    appropriate_for_kids = models.BooleanField()

    def __str_(self):
        return self.activity
