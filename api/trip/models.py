from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    code = models.CharField(max_length=2, default='NA')

    def __str__(self):
        return self.name + "(" + self.code + ")"


class State(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    code = models.CharField(max_length=2, default='NA')
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name + ", " + self.country.code
    #country = models.CharField(max_length=200)


class Location(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    state = models.ForeignKey(
        State, on_delete=models.CASCADE, null=True, blank=True)
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name + ", " + self.state.code


class Trip(models.Model):
    title = models.CharField(max_length=200)

    # Do we want to delete locations when a trip is deleted? I think we shouldn't include the on_delete, but maybe I'm getting that functionality wrong.
    # location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='trips', null=True)

    # Also, we might want to have a many to many relationship so multiple trips can have the same location and one trip and have multiple locations
    # Tyler advised that we give each trip just one location to make things simpler
    overview = models.TextField(max_length=500, null=True, blank=True)
    locations = models.ManyToManyField('trip.Location')
    activities = models.ManyToManyField('trip.Activity')
    start_date = models.DateField()
    end_date = models.DateField()
    imageURLs = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name


class Activity(models.Model):
    for_kids = models.BooleanField()
    for_moms = models.BooleanField()
    title = models.CharField(max_length=200)
    location = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name='activities', null=True)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title + ", " + self.location.name


# still missing/ not sure
# Location
# Groups: One to many rel. with groups model
# Trips: One to many relationship with trip model (I think this is covered in the Trip model...)

# Activity
# Trip: Many to one rel. with trip model (I think this is covered in the Trip model...)


# We need to decide on which model we want to define relationships...
# For example, would it be better to define 'attendees' in a field on the Trip model?
    # Or would it be better to have 'trips' as a field on the user model?
