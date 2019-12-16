from django.db import models

# Create your models here.

class City(models.Model):
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    
    def __str__(self):
        return self.city + ", " + self.country 

class Topic(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title