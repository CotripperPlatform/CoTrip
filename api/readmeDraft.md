### Steps to setup 

1. `git clone git@github.com:CotripperPlatform/CoTrip.git` to clone the repo. 
1. `pipenv install` and then `pipenv install psycopg2-binary`. To create the virtual environment and install what's in the pipfile. 
1. Also `pipenv install autopep8`. 
1. Replaced the `DATABASES` dictionary in `CoTrip/api/settings.py` with 

```
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

1. Created `settings.sql` file in CoTrip/api with the text 
```
CREATE DATABASE cotripper;
CREATE USER cotripperuser WITH PASSWORD 'cotripper';
GRANT ALL PRIVILEGES ON DATABASE cotripper TO cotripperuser;
```

1. Entered into virtual shell via `pipenv shell`
1. Ran the command `psql -U postgres -f settings.sql` to create the database in psql. 