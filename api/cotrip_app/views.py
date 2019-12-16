from django.shortcuts import render
from .models import Topic

# Create your views here.
def topic_list(request):
    topics = Topic.objects.all()
    return render(request, 'cotrip/topics/html', {'topics': topics})