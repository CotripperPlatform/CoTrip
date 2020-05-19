from django.contrib import admin
from .models import Location, Trip, Activity,State,Country

admin.site.register(Location)
admin.site.register(Trip)
admin.site.register(Activity)
admin.site.register(State)
admin.site.register(Country)
