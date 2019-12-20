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

3. Run the virtual shell `pipenv shell`

4. Run the following command in the shell to load the sql file into postgres

```
psql -U postgres -f settings.sql
```

5. Run the following command in the shell to migrate models into newly created database

```
python3 manage.py migrate
```

6. Run the following command in the shell to run the python server

```
python3 manage.py runserver
```

## API Description

### Serializers

- Purpose: Serializers are used to transform various data types into JSON or XML, which is the style of storage used in most API's. In the case of the backend of this project, we were taking querysets and model instances and converting them to JSON objects to be stored in our CoTripper API.

To read more about Django Serializers-
https://www.django-rest-framework.org/api-guide/serializers/

### Views

- Purpose: Views are a way of performing the most basic functionality of the internet, being you send a request (http, fetch) and get back a response (what's viewed on your webpage, data from an API, etc.) In this project, views gave complete CRUD (Create, Read, Update, Delete) functionality to the User and Profile models.

### Urls

- Purpose: URL's are created so various aspects of the datasets, or a certain CRUD function can be accessed through a URL, giving a direct path for the front-end to fetch from. The paths that exist in CoTripper are represented in the table below...
  | Path | Description |
  | :----------------------: | ------------------------------------------------- |
  | `auth` | home route for authentication
  | `auth/register` | register a new authenticated user |
  | `auth/login` | login authenticated user|
  | `auth/user` | view authenticated user |
  | `auth/logout` | logout authenticated user |
  | `profile` | view list of existing profiles |
  | `profile/<ink:pk>` | find, update, or delete a profile by it's primary key |

## Authentication

-Purpose: Authentication is using identifying credentials associated with a request to get an appropriate response. In this project, from the Django Rest Framework, we used Django Knox. Django Knox takes use of encrypted tokens generated from a password, and is used to give security and protection to user information.

## API Deployment

- Deployed on Heroku
