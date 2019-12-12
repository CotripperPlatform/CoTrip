from django.db import models
from django.contrib.auth.models import User
from django.apps import apps
from django.db.models.signals import post_save
from django.dispatch import receiver
Topic = apps.get_model('cotrip_app', 'Topic')


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
    topics = models.ManyToManyField(Topic)
    age = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(18)])

    def __str__(self):
        return self.first_name + " " + self.last_name

@reciever(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
@reciever(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
