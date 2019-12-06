# Description

This is the front end for the CoTripper that will connect to the the backend.

## Getting Started

These instructions will help you get started in getting the React front end to
run on your local machine for testing and development.

### Prerequisites

You will need the following installed locally on your machine:

- [ `pipenv` ](https://github.com/pypa/pipenv)
- [ `pyenv` ](https://github.com/pyenv/pyenv)
- [ `node` ](https://nodejs.org/en/) (>11.0.0)

### Installing

After you have cloned the repository, you'll need to need to make sure that you
work for the correct branch for the part of the project that you are assigned
to. Here's an example:

`git checkout development` will change your current branch to development.

Then you will need to run the following to install dependencies:

```sh
npm install
```

You can then use the following command to start the server on your machine:

```sh
npm start
```

### Usage

#### Prototype

You can find the [mock and clickable prototype here](https://www.figma.com/file/ggst6OoJWkwaV2DGq4nBzA/CoTripper?node-id=0%3A1)

#### Creating New Components

We use [Hygen]() to generate consistent components. We have a generator for class components as well as function components.

Ensure that Hygen is installed globally:

```sh
npm install hygen -g
```

To generate a **function** component, run the following

```sh
hygen component-const new --name NameOfComponent
```

To generate a **class** component, run the following

```sh
hygen component-class new --name NameOfComponent
```
