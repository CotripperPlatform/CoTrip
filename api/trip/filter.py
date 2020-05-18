from django_filters.rest_framework import FilterSet
import django_filters
from .models import Trip

'''
filter class for trip by title and time range
    title: filter by title with fuzzy query, return the list which each trip.title contains the filter's title (ignore case)
    time range: user can get a list with selecting a time range(start_date or end_date)
        start_date: return the list which each trip.start_date >= the selected start_date
        end_date: return the list which each trip.end_date <= the selected end_date
'''
class TripFilter(FilterSet):
    start_date = django_filters.DateFilter(field_name="start_date",
                                            lookup_expr="gte")  
    end_date = django_filters.DateFilter(field_name="end_date", lookup_expr="lte") 
    title = django_filters.CharFilter(field_name="title",lookup_expr="icontains") 

    location = django_filters.CharFilter(field_name="locations",lookup_expr="in")
    activity = django_filters.CharFilter(field_name="activities",lookup_expr="in")
    attendee = django_filters.CharFilter(field_name="attendees",lookup_expr="in")
    class Meta:
        model = Trip
        fields = ('title','location','activity','attendee','start_date', 'end_date')