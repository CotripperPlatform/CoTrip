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

#### Icons
##### Usage
In `App.js` we will add the following and if you would like to add more icons to the library you will just import, add to library, and seperate by commas like below.
```
import { library } from ‘@fortawesome/fontawesome-svg-core’
import { fab } from ‘@fortawesome/free-brands-svg-icons’
import { fas } from ‘@fortawesome/free-solid-svg-icons’
import { far } from ‘@fortawesome/free-regular-svg-icons’
import { faCoffee } from ‘@fortawesome/free-solid-svg-icons’
library.add(fab, far, fas, faCoffee)
```
To use globally, make sure to have the import syntax in the component you would like to use an icon in. To use any of these icons:
```
import React from ‘react’
import { FontAwesomeIcon } from ‘@fortawesome/react-fontawesome’
export const model = () => (
  <div>
    <FontAwesomeIcon icon=“check-square” />
    Favorite beverage: <FontAwesomeIcon icon=“coffee” />
    <FontAwesomeIcon icon={[‘fab’, ‘apple’]} />
    <FontAwesomeIcon icon={[‘fab’, ‘microsoft’]} />
     <FontAwesomeIcon icon={[‘far’, ‘adress-card’]}
  </div>
)
```
### Add Icon/Using With Storybook:
**Add syntax to stories folder:**
<img width="1440" alt="Screen Shot 2019-12-10 at 10 55 59 AM" src="https://user-images.githubusercontent.com/54545904/70625134-c8e7f580-1bef-11ea-9072-75b3584650e4.png">

**Use props in JS file:**
<img width="1440" alt="Screen Shot 2019-12-10 at 10 56 09 AM" src="https://user-images.githubusercontent.com/54545904/70625139-cb4a4f80-1bef-11ea-858f-5c909e74b793.png">

- You can always go to [font awesome](https://fontawesome.com/) for icons and their names as well.

- If you would like to learn more about the react font awesome npm package please visit the [package page](https://www.npmjs.com/package/@fortawesome/react-fontawesome)