from django.db import models


class Topic(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Location(models.Model):
    city = models.CharField(max_length=75)
    state = models.CharField(max_length=30, null=True, blank=True)
    country = models.CharField(max_length=50)
    latitude = models.DecimalField(max_digits=22,
    decimal_places=16)
    longitude = models.DecimalField(max_digits=22,
    decimal_places=16)
    image = models.ImageField(default='default.jpg', upload_to='location_pics')

    def __str__(self):
        return self.city