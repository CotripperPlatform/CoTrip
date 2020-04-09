from .base import *

DATABASES['default'] = {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'cotripper',
    'USER': 'cotripperuser',
    'PASSWORD': 'cotripper',
    'HOST': 'localhost'
}


DEBUG = True
ALLOWED_HOSTS = []