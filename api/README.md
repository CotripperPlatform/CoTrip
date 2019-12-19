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

2. Run command `pipenv install` this will set up the virtual environment and install dependencies listed in the pipfile.

3. Run command `pipenv install django` to install django, listed in pipfile

4. Run command `pipenv install psycopg2-binary` to install a PostgreSQL database adapter for Python

5. Run command `pipenv install django-rest-framework` to install a necessary dependency to turn tables into JSON objects for the API

6. Run command `pipenv install django-rest-knox` to install Django Knox, the dependency used for authentication of the user

7. Run command `pipenv install Pillow` to install dependency used for importing images

8. Run command `pipenv install django-cors-header` to allow in-browser requests to database from other origins.

9. Run the virtual shell `pipenv shell`

10. Run the following command in the shell to load the sql file into postgres

```
psql -U postgres -f settings.sql
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
