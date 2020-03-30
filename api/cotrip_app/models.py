from django.db import models


class Topic(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title




class City(models.Model):
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.city
