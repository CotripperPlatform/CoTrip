from .base import *

DATABASES['default'] = {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'cotripper',
    'USER': 'cotripperuser',
    'PASSWORD': 'cotripper',
    'HOST': 'localhost'
}


DEBUG = True

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend' #During Development

ALLOWED_HOSTS = []