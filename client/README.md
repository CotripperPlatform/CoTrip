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

For icons, we are using font awesome. To integrate it with React we will be using the NPM Package `react-fontawesome`.

##### Usage
In `App.js` we will add the following:
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { *icons you would like to use here* } from '@fortawesome/free-solid-svg-icons'
 
library.add(*icons you would like to add to library*)
```

To breakdown what is going on above:
In our call to library.add() we're passing:

- fab: which represents all of the brand icons. So any of the brand icons in that package may be referenced by icon name as a string anywhere else in our app. For example: "apple", "microsoft", "facebook", or "google". 
- fas: is solid background icons

- far: represents all regular icons, meaning a blank background

- The last import line in the above syntax is where we can call icons individually to be specific in our library (more on that below). 

So to put this all together this is how the syntax in our `App.js` file would look like and to add more icons to the library you will just import, add to library, and seperate by commas.
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, far, fas, faCoffee)
```

To use globally, make sure to have the import syntax in the component you would like to use an icon in. Suppose we have a component and we want to use the icons that we added to our library in our `app.js` file. To use any of these icons:
```
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const model = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
     <FontAwesomeIcon icon={['far', 'adress-card']} 
  </div>
)
```
### Add Icon/Using With Storybook:
**Add syntax to stories folder:**
<img width="1440" alt="Screen Shot 2019-12-10 at 10 55 59 AM" src="https://user-images.githubusercontent.com/54545904/70545540-bb713380-1b3b-11ea-9562-b98b90e940ec.png">
**Use props in `js` file:**
<img width="1440" alt="Screen Shot 2019-12-10 at 10 56 09 AM" src="https://user-images.githubusercontent.com/54545904/70545541-bb713380-1b3b-11ea-9974-cdc0f279a653.png">
**Result in Storybook:**
<img width="1405" alt="Screen Shot 2019-12-10 at 10 55 43 AM" src="https://user-images.githubusercontent.com/54545904/70545539-bb713380-1b3b-11ea-8a6a-284f2f755d77.png">



**Last things to note:**
- When searching an icon with `fa` remember a drop down list will show a list of icons, its helpful because you will be able to see what is what instead of guessing, see example screenshot below:

<img width="1276" alt="Screen Shot 2019-12-10 at 3 55 56 AM" src="https://user-images.githubusercontent.com/54545904/70514174-1cc7e100-1b01-11ea-9879-2f8de7776586.png">

- Also to note that if you find yourself getting confused on what icon you wnat to choose and you dont know the name or you are overwhelmed by number of options, you can head over to [font awesome](https://fontawesome.com/icons?d=gallery) and search the icon you would like and find the specific name to call there, see example below:
<img width="1408" alt="Screen Shot 2019-12-10 at 4 01 54 AM" src="https://user-images.githubusercontent.com/54545904/70514643-0d956300-1b02-11ea-88f5-4e43e9c0c59d.png">
<img width="1420" alt="Screen Shot 2019-12-10 at 4 02 49 AM" src="https://user-images.githubusercontent.com/54545904/70514644-0d956300-1b02-11ea-8378-58fefeeed9f0.png">

### More Details:
- If you would like to learn more about the react font awesome npm package please visit the [package page](https://www.npmjs.com/package/@fortawesome/react-fontawesome)