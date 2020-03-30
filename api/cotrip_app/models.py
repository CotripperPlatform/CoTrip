from django.db import models


class Topic(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Location(models.Model):
    city = models.CharField(max_length=75)
    state = models.CharField(max_length=30, null=True, blank=True)
    country = models.CharField(max_length=50)
    lat = models.DecimalField(max_digits=22,
    decimal_places=16)
    lon = models.DecimalField(max_digits=22,
    decimal_places=16)
    city_image = models.CharField(max_length=200)


    def __str__(self):
        return self.city