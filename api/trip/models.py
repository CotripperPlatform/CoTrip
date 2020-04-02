from django.db import models


class Location(models.Model):
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    country = models.CharField(max_length=200)

    def __str__(self):
        return self.city

class Trip(models.Model):
    name = models.CharField(max_length=200)

    # Do we want to delete locations when a trip is deleted? I think we shouldn't include the on_delete, but maybe I'm getting that functionality wrong.

    # location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='trips', null=True)

    # Also, we might want to have a many to many relationship so multiple trips can have the same location and one trip and have multiple locations

    locations = models.ManyToManyField('trip.Location')
    activities = models.ManyToManyField('trip.Activity')


    def __str__(self):
        return self.name

class Activity(models.Model):
    for_kids = models.BooleanField()
    for_moms = models.BooleanField()
    title = models.CharField(max_length = 200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='activities', null=True)

    def __str__(self):
        return self.title


# Trip
# Location: Many to one relationship with Location model
# Date start:
# Date end:
# Attendees: Many to many relationship with profile model
# Activities: One to many relationship with Activities model

# Location
# City
# State
# Country
# Groups: One to many rel. with groups model
# Members there: One to many rel. with profile model
# Trips: One to many relationship with trip model

# Activity
# For kids: boolean
# For moms: boolean
# Location: Many to one rel. with location model
# Trip: Many to one rel. with trip model