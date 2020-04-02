from django.db import models


class Location(models.Model):
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    country = models.CharField(max_length=200)

    def __str__(self):
        return self.city

class Trip(models.Model):
    name = models.CharField(max_length=200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='trips', null=True)

    def __str__(self):
        return self.name
