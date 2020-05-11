from django_filters.rest_framework import FilterSet
import django_filters
from .models import Trip

'''
filter class for trip by title, start_date, end_date
    title: filter by title with fuzzy query, return the list which each trip.title contains the filter's title (ignore case)
    start_date: return the list which each trip.start_date >= the filter's start_date
    end_date: return the list which each trip.end_date >= the filter's end_date
'''
class TripFilter(FilterSet):
    start_date = django_filters.DateFilter(field_name="start_date",
                                            lookup_expr="gte")  
    end_date = django_filters.DateFilter(field_name="end_date", lookup_expr="lte") 
    title = django_filters.CharFilter(field_name="title",lookup_expr="icontains") 

    class Meta:
        model = Trip
        fields = ('title','start_date', 'end_date')
