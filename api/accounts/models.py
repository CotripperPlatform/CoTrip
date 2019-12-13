from django.db import models
from django.contrib.auth.models import User
from django.apps import apps
from django.db.models.signals import post_save
from django.dispatch import receiver
from ..cotrip_app.models import Topic


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    first_name = models.CharField(max_length=200, default=null)
    last_name = models.CharField(max_length=200, default=null)
    city_of_residence = models.CharField(max_length=200, defaul=null)
    # topics = models.ManyToManyField(Topic)
    # add connections, list of users?
    age = models.IntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name} Profile'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
