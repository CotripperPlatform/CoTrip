# Setting Up the App

## First Steps
1. Clone the repository from develop branch
2. Navigate into the CoTrip directory
3. Run command `git checkout develop` to ensure you are on the develop branch while installing dependencies

## Setting up Frontend
1. Navigate into client directory
2. Run command `npm install` to install the dependencies found in the package.json file, when you start working on an existing branch, ensure that additional dependencies are not listed in the package.json file found on that branch.
3. Run command `npm start` to start the server and view the frontend on your machine.

## Setting up Backend
1. Navigate into api directory
2. Run command `pipenv install` this will set up the virtual environment and install dependencies listed in the pipfile, when you start working on an existing branch, ensure that additional dependencies are not listed in the pipfile file found on that branch.
3. Run the virtual shell by running the command `pipenv shell`.
4. Load the sql file into postgres by running the following command:
```
psql -U postgres -f settings.sql
```
5. Run command `python manage.py makemigrations` followed by `python manage.py migrate`.
6. Run command `python manage.py runserver` to start the server and view the backend on your machine.