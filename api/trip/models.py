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
    # Tyler advised that we give each trip just one location to make things simpler

    locations = models.ManyToManyField('trip.Location')
    activities = models.ManyToManyField('trip.Activity')
    date_start = models.DateField()
    date_end = models.DateField()
    attendees = models.ManyToManyField('accounts.CustomUser')


    def __str__(self):
        return self.name

class Activity(models.Model):
    for_kids = models.BooleanField()
    for_moms = models.BooleanField()
    title = models.CharField(max_length = 200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='activities', null=True)

    def __str__(self):
        return self.title + ", " + self.location.city


#still missing/ not sure
# Location
# Groups: One to many rel. with groups model
# Members there: One to many rel. with profile model
# Trips: One to many relationship with trip model (I think this is covered in the Trip model...)

# Activity
# Trip: Many to one rel. with trip model (I think this is covered in the Trip model...)


# We need to decide on which model we want to define relationships...
# For example, would it be better to define 'attendees' in a field on the Trip model?
    # Or would it be better to have 'trips' as a field on the user model?