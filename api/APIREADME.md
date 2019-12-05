# CoTripper API

## Description

CoTripper is a Django-based project aimed at providing an experience-based travel platform for single mom families. CoTripper aims to encourage ideas, exposure, and to be helpful around helping planning vacations and building community. We're more than a travel solution.

## Technologies

- Python
- Django
- PostgreSQL
- Psql
- Django Rest Framework

## Database Setup

1. Clone the Repository

```
git clone git@github.com:CotripperPlatform/CoTrip.git
```

2. Install pipenv and then install psycopg2-binary and autopep8

```
pipenv install

pipenv install psycopg2-binary

 pipenv install autopep8
```

3. Replace the DATABASE dictionary in the settings.py within the project directory with the following code:

```
# settings.py

DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql',
       'NAME': 'cotripper',
       'USER': 'cotripperuser',
       'PASSWORD': 'cotripper',
       'HOST': 'localhost'
   }
}
```

4. Create settings.sql file in CoTrip/api:

```
touch settings.sql

```

5. Within the settings.sql file include the following text:

```
CREATE DATABASE cotripper;
CREATE USER cotripperuser WITH PASSWORD 'cotripper';
 GRANT ALL PRIVILEGES ON DATABASE cotripper TO cotripperuser;

```

6. Run the virtual shell

```
pipenv shell
```

7. Run the following command in the shell to create the database in psql

```
psql -U postgres -f settings.sql
```

## API Setup

1. Change into your app directory (cotripper)
2. Install Django rest framework dependency

```
pipenv install djangorestframework
```

3. Add Django Rest Framework as a dependency to your Installed_Apps list in your settings.py

```
INSTALLED_APPS = [
#...
‘Cotripper’,
‘Rest_framework’,
]
```

## API Description

### Serializers

- Purpose: Define the API representation

### Views

- Purpose: Define the view behavior

### Urls

- Purpose: Define making between URLs and views

## API Deployment

- Deployed on Heroku
