from django.db import models

class Place(models.Model):
    name = models.CharField(max_length = 200)
    code = models.CharField(max_length = 2)
class Country(Place):
    def __str__(self):
        return self.name + "(" + self.code +")"
class State(Place):
    country = models.ForeignKey(Country, on_delete=models.CASCADE) 
    def __str__(self):
        return self.state_code +", " + self.country.code
    #country = models.CharField(max_length=200)
class City(Place):
    def __str__(self):
        return self.name + ", " + self.state.code
class Location(Place):
    city = models.ForeignKey(City, on_delete=models.CASCADE)

class Trip(models.Model):
    title = models.CharField(max_length=200)

    # Do we want to delete locations when a trip is deleted? I think we shouldn't include the on_delete, but maybe I'm getting that functionality wrong.
    # location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='trips', null=True)

    # Also, we might want to have a many to many relationship so multiple trips can have the same location and one trip and have multiple locations
    # Tyler advised that we give each trip just one location to make things simpler

    locations = models.ManyToManyField('trip.Location', related_name='trips')
    activities = models.ManyToManyField('trip.Activity', related_name='trips')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.title


class Activity(models.Model):
    for_kids = models.BooleanField()
    for_moms = models.BooleanField()
    title = models.CharField(max_length=200)
    location = models.ManyToManyField('trip.Location', related_name='activities',)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title + ", " + self.location.city


# still missing/ not sure
# Location
# Groups: One to many rel. with groups model
# Members there: One to many rel. with profile model
# Trips: One to many relationship with trip model (I think this is covered in the Trip model...)

# Activity
# Trip: Many to one rel. with trip model (I think this is covered in the Trip model...)


# We need to decide on which model we want to define relationships...
# For example, would it be better to define 'attendees' in a field on the Trip model?
    # Or would it be better to have 'trips' as a field on the user model?
