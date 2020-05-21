from .base import *
import django_heroku
import dj_database_url
import os

DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)

# Activate Django-Heroku.
django_heroku.settings(locals())