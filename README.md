# Project Title

CoTripper: an app to facilitate organized group travel experiences for
single-mothers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Ensure you have the following installed:

* [ `pipenv` ](https://github.com/pypa/pipenv)
* [ `pyenv` ](https://github.com/pyenv/pyenv)
* [ `node` ](https://nodejs.org/en/) (>11.0.0)

### Installing

#### API

We use `pipenv` to manage dependencies and a virtual environment for this
project. So change into the `api/` directory and setup pipenv:

```sh
pipenv install
```

Once you've done so, either be sure to run any command within the environment:

```sh
pipenv run python manage.py runserver
```

Or start the shell:

```sh
pipenv run shell
python manage.py runserver
```

#### Client

The client-side application is built with React using `create-react-app`. To
install and setup, just install everything with npm:

```sh
npm install
```

### Coding Style

We use [ `Prettier` ](https://prettier.io/) for JavaScript and [ `autopep8`
](https://github.com/hhatto/autopep8) for Python. Ensure both are installed and
your editor is set to automatically format on save.

Poorly formatted code will not be merged.

## Deployment

TBC

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on the process for submitting pull requests.
