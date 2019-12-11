from django.db import models


class User(models.Model):
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=100)

    def __str__(self):
        # return super().__str__()
        return self.email


class Profile(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    city_of_residence = models.CharField(max_length=200)
    dream_destination = models.CharField(max_length=100)
    profile_photo = models.ImageField(max_length=200)
    # topics = models.ForeignKey(Topic, on_delete=models.PROTECT)

    def __str__(self):
        return self.last_name


# Create your models here.
