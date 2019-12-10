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

#### Getting Started
This package is for integrating with React. If you aren't using React then it's not going to help you. Head over to our "Get Started" page for some guidance.

#### Usage
Build a library to reference icons throughout our app more conveniently, being that we want to use our icons in more than one component in our app, right?

So, we will add them to a library (which we will setup in a bit). Do this setup once in some initializing module of your app, adding all of the icons we will use in our app's React components.

To use the icons globally we will have to setup some syntax where our app is initialized, in this case it will be in `App.js`.

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

- fab: which represents all of the brand icons in @fortawesome/free-brands-svg-icons. So any of the brand icons in that package may be referenced by icon name as a string anywhere else in our app. For example: "apple", "microsoft", "facebook", or "google". You will see below that fab is added to our library call, so this will enable us to use brand icons anywhere so no need to add brand icons individually like we need for regular icons which is explained below.
- fas: is solid background icons

- far: represents all regular icons, meaning a blank background

- The last import line in the above syntax is where we can call icons individually to be specific in our library (more on that below). 

An example would be such as if we wanted to use a coffee icon we would first do in the import (Please note to see list of icons, once you type "fa" a dropdown list will appear to show a list of icons you would like to choose from):
```
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```
Then we would add that to the library call like so (please note as stated above that fab represents all brand icons so no need to be specific with brand icons like we need to do for regular icons):
```
library.add(fab, far, fas, faCoffee)
```

So to put this all together this is how the syntax in our `App.js` file would look considering the example of using the coffee icon and fab:
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, far, fas, faCoffee)
```
If you would like to add more icons to the library you will just import and add to library and seperate by commas. To give an example:
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, far, fas, faCheckSquare, faCoffee)
```

Now that we have the icons in our library we can use it globally throughout the app. Below I  will show you how to use the icons throughout our app in any component/file.

Make sure to have this import syntax in the component you would like to use an icon in:
```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
```
Now that we have the above syntax, lets call an icon!

Suppose we have a beverage component and we want to use the icons that we added to our library in our `app.js` file. It would look something like this:
```
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
  </div>
)
```
Simple right? Well what if we wanted to use the brand icons, lets say we had a gadget component, we will do this:
```
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const Gadget = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Popular gadgets come from vendors like:
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
  </div>
)
```
What if we wanted to use the regular icons with no background, i.e. the `far` package, we would do the same as above but with far:
```
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const PersonID = () => (
  <div>
    Popular Id cards like:
    <FontAwesomeIcon icon={['far', 'adress-card']} />
  </div>
)
```

Last things to note:
- When searching an icon with `fa` remember a drop down list will show a list of icons, its helpful because you will be able to see what is what instead of guessing, see example screenshot below:

<img width="1276" alt="Screen Shot 2019-12-10 at 3 55 56 AM" src="https://user-images.githubusercontent.com/54545904/70514174-1cc7e100-1b01-11ea-9879-2f8de7776586.png">

- Also to note that if you find yourself getting confused on what icon you wnat to choose and you dont know the name or you are overwhelmed by number of options, you can head over to [font awesome](https://fontawesome.com/icons?d=gallery) and search the icon you would like and find the specific name to call there, see example below:
<img width="1408" alt="Screen Shot 2019-12-10 at 4 01 54 AM" src="https://user-images.githubusercontent.com/54545904/70514643-0d956300-1b02-11ea-88f5-4e43e9c0c59d.png">
<img width="1420" alt="Screen Shot 2019-12-10 at 4 02 49 AM" src="https://user-images.githubusercontent.com/54545904/70514644-0d956300-1b02-11ea-8378-58fefeeed9f0.png">

### More Details:
- If you would like to learn more about the react font awesome npm package please visit the [package page](https://www.npmjs.com/package/@fortawesome/react-fontawesome)