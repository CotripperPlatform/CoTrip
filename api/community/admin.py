from django.contrib import admin
from .models import Group, Event, Topic, Media, Hashtag

# Register your models here.

admin.site.register(Group)
admin.site.register(Event)
admin.site.register(Topic)
admin.site.register(Media)
admin.site.register(Hashtag)
