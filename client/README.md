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

`git checkout develop` will change your current branch to development.

Then you will need to run the following to install dependencies:

```js
npm install
```

You can then use the following command to start the server on your machine:

```js
npm start
```

### StoryBook Organization

With as many components as we may have for our application, it is important that we stay as organized as possible and do not loose track of where everything is. This part of the README is a short explanation of the organization of our Storybook. The following **bold lines** will be the folders that are listed in the Storybook (as seen below) so that you have a grasp of how it should look and **where to store new components**. There is also going to be a description of **why a component would fall under a certain folder**. Together, if we follow these guidelines, we can keep the Storybook DRY.

---

![StorybookLayout](./src/assets/images/StorybookLayout.png)

---

**Layout**

These components are going to be used interchangebly to produce the layout for a full page. Component examples would include but are not limited to...Icons, Logos, Banners, Bio, SignUpAd, Cards, Profile picture's or Footers.

**Atoms/Atomic Components**

An atomic component would be a button or a text input. This is going to be the smallest piece of a UI.

**Molecule Components** (Not Implemented Yet)

A molecule would be a SearchInput component that uses both the button and text input Atoms. A molecule is made up of atoms. If you create a Molecule please list it as such.

**Pages**

These are the physical full pages that have been put together using layout components. These pages might be used interchangebly but are complete pages.

### Proper Syntax for Storybook

When creating a new component and wanting to safely store it, please do so with this Hierarchy in mind.

---

Lets throw a new component into the Atoms folder, here is what it would look like **in stories.js**.

```js
storiesOf("Atoms/<component name>", module);
```

Or maybe for a component that you want to throw into the Layout folder. **In stories.js**, it would look like such

```js
storiesOf("Layout/Logo", module)
  .add("Default", () => <Logo />)
  .add("Small", () => <Logo small />)
  .add("Large", () => <Logo large />)
  .add("Clickable Default Route Small", () => <Logo small clickable />)
  .add("Clickable Route as Prop", () => <Logo clickable to="/route" />);
```

One thing to look out for are **NESTED FOLDERS**. As a team we need to make sure we do this correctly. Watch for spelling and make sure there are no duplicates of the same folder outside of where you would want a folder nested. To create a proper nested folder of **Nav** inside of **Atoms**, it would look like so...

```js
storiesOf("Atoms/Nav/<component_name>", module);
```

### Prototype

You can find the [mock and clickable prototype here](https://www.figma.com/file/ggst6OoJWkwaV2DGq4nBzA/CoTripper?node-id=0%3A1)

### Creating New Components

We use [Hygen]() to generate consistent components. We have a generator for class components as well as function components.

Ensure that Hygen is installed globally:

```js
npm install hygen -g
```

To generate a **function** component, run the following

```js
hygen component-const new --name NameOfComponent
```

To generate a **class** component, run the following

```js
hygen component-class new --name NameOfComponent
```

### Using the `Icon` Component

To use the `Icon` component, first import it, then render it inside your
component, passing in a string representing the icon you'd like to render for
the `icon` prop.

```jsx
import Icon from '../Icon/Icon'


function HelloIcon = props => {
    return (
        <h3>Hello <Icon icon={"heart"}/></h3>
    )
}
```

You can change the size of the icon by passing the prop size:

```jsx
import Icon from '../Icon/Icon'


function HelloIcon = props => {
    return (
        <h3>Hello <Icon icon={"heart"} size={"lg"}/></h3>
    )
}
```

This is a list of sizes that you can use:

- xs
- sm
- lg
- 2x - 10x

You can find the list of icons on the [Font Awesome
website](https://fontawesome.com/). Note that you only need to pass in the
icon's name for the `icon` prop.

### CSS Class Names

- To avoid style conflicts we want to make sure all our CSS selectors are unique.
- This will be the naming convention, based on [BEM](https://css-tricks.com/bem-101/).

```
.ComponentName
.ComponentName--modifier
.ComponentName__element-name
.ComponentName__element-name--modifier
```

For example:

```
.CommentBody {
  color: var(--green);
}

.Logo--small {
  height: 10rem;
}

.CommentBody__date {
  font-size: 2rem;
}

.CommentBody__main--small {
  font-size: 1rem;
}
```

## Deployment

- Deployed on Netlify: https://cotripper.netlify.com/

# SiteWide Issues

## Description

These issues are not in any specific page; they are site-wide.

## Current Status

See 'Future Development' below.

## Future Development

1. Search feature is not functional on NavBar
2. Inbox is not functional on NavBar
3. Footer does not have links set up to Social Media
4. Sitemap (mentioned in footer) does not exist
5. Email sign-up is not linked to client’s email service
6. Users have no way (front-end or back-end) to reset their password
7. There is no front-end or back-end functionality for the inbox

# Splash Page

## Description

The Splash page is the first page users encounter when they visit the website but are not logged in. The splash page offers users the option to register or sign in.

## URL Route

"/"

## Current Status

This page is fully functioning, responsive, and tied to the back-end.

## Future Development

It can be hard to read the 'BOOK TRIPS' text when the user's screen is less than 1200 px width. Perhaps change width of the <p> element when between 1200 pix & 575px

# Onboarding

## Description

This is the registration page for creating a new user

## URL Route

"/register"

## Current Status

Navigating the Onboarding Page takes the user through three steps.

Step One: Fully functional, but not responsive under 1000px

Step Two: Fully functional & responsive

Step Three: Fully functional - but the app cannot upload a photo via aws when ran locally. The eployed app does upload a photo via aws when.

## Future Development

By steps:

Step One: When under 1000px, password requirements box stays the same size - but the input fields change size, are no longer lined up, and are not centered. The text input boxes need to remain the same size, or be centered upon screen resolution shrink.

![Screenshot](Screenshot.jpg)

Step Three: Responsive, but the dream destination text is cut off when screen resolution is 350px or less.

# Login Page

## Description

This is where the user logs in with their username and password

## URL

"/login"

## Current Status

The Login page is fully functional, but not fully responsive.

## Future Development

Text-input fields should not be dynamic and should remain the same size (ideally the same size as the Submit button). Future contributors may consider adding a Back/Cancel button and a Reset Password feature.

There is no front-end or back-end method for a user to reset their password on their own nor by an admin.

# Community Home Page

## Description

This page is where the user can search for specific groups, connect with "other moms", and discover different groups. Also, this page suggests groups for the user to join based on the location the user specifies.

## URL Route

"/community/join-groups"

## Current Status

The page is static and does not pull any data from the backend.

The page needs to make API calls to get group locations (city and state) so that the groups rendered align with the location specified by the user.

This page needs data from the Groups model on the back-end.

## Future Development

1. Make the search bar, "sort by" filter, and "See More" features function.
2. Pills should render group data pulled from the back-end. When clicked, pills should change color and redirect the user to that group's page.

# Community Groups Page

## Description

After a user clicks on a specific group, they are redirected to this page where they can learn more about a specific group, see different user comments and hashtags, a description of the page, members that are part of the group, and upcoming events.

## URL Route

"/community/view-group"

## Current Status

The page has all necessary components but only renders mock data. The page is mostly mobile responsive. The page needs to fetch group data from the backend to search the group in the group modals.

## Future Development

Different users should be able to like a post and comment on the post, click on the hashtag, click "join" to join the group, click on members to see different members, and click on upcoming events.

# Community People Page

## Description

This page allows the users to view members by location. The user can also search for groups, and filter search results with the sort feature.

## URL Route

"/community/view-group"

## Current Status

The page is currently static. The search bar and 'sort by' features do not work. The user should be able to click "See More." "Discover Groups" and "Connect With Other Moms" should each link to the appropriate pages.

## Future Development

1. Build the 'sort by' feature
2. Build the search bar
3. Add event listener so that pills change color when clicked
4. Header buttons should by dynamic
5. "See All" should work

# Forum Page

## Description

The forum page allows the user to search for topics and hashtags, and sort by different criteria. The user can also add favorite topics and hashtags that they "heart" (like) as well.

## URL Route

"/forum-page"

## Current Status

The forum page is currently all static but the tabs on the top will link to the correct page when clicked on. The search bar, "My favorite topics" and "Discover Topics" are static.

## Future Development

1. Build the search bar so that users can search
2. "My favorite topics" and "Discover topic" should link properly
3. "Pills" should change color when clicked

# Forum - Hashtag

## Description

This page returns results for the hashtag searched by the user.

## URL Route

"/forum-page-hashtag"

## Current Status

The tabs are functioning and the NavBar works.

## Future Development

1. This page should retrieve data from the back-end
2. This page is not responsive
3. The Like/Comment buttons are not functioning

# Forum - Topic

## Description

When the user searches forum pages by topic, this page provides results.

## URL Route

"/forum-page-topic"

## Current Status

1. Tabs are functioning
2. NavBar works
3. Adds description and members
4. Page renders mock data

## Future Development

1. Retrieve data from back-end
2. 'See More' button
3. Write a message to post should function
4. The page is not responsive

# Book A Trip

## Description

This page provides users with a list of upcoming trips.

## URL Route

"/book-a-trip"

## Current Status

This page should receive data about trips offered by CoTrip, but it is not set up to receive live data. The data rendered now is mock data.

The search bar on this page is not functional, though it ought to take user input and hide any components that do not match that input.

This page is responsive. It renders on mobile devices without breaking any components.

## Future Development

Future development should focus on:

1. Having this page retrieve and render live data about upcoming trips
2. Making the search bar functional

# Trip Detail

## Description

This page provides users with details about an upcoming trip.

## URL Route

"/TripDetail"

## Current Status

This page only loads mock data for a specific trip: Hawaii 2020.

This page should render live data depending on which trip the user clicked on from the "Book A Trip" page. No links are live or lead to any other page within the app.

This page is responsive. It renders on mobile devices without breaking any components. The main content renders justified to the left of the screen, though, and would look better centered.

## Future Development

Future development should focus on:

1. Centering components when they render on smaller screens.
2. Rendering details from live trip data.
3. The "Book Trip" button should redirect users to a registration page for that specific trip.

# /groups

Returns a list of all groups in the database.

## Request Example

```
HTTP Methods: POST, GET
fetch(`${BASE_URL}/groups`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
 	})
```

If post request, expects the following request body format

```
{
title: "yourtitle",
description: "a description"
}
```

## Current Status

The view is functional, allowing for viewing of current groups and creation of new ones, if request is authenticated.

## Future Development

This route is complete. It is ready to be accessed by the front end.

# /groups/<int:pk>

Returns a specific instance of the model that matches the passed pk

## Request Example

HTTP Methods: GET, UPDATE, DELETE
`` fetch(`${BASE_URL}/groups/<int:pk>`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
if UPDATE request body should include an object with the name of the field, you want to update set to its new value ex. `{title: "King of England"}`

## Current Status

Route is functional, allowing for GET UPDATE and DELETE on individual instances

## Future Development

See Future Development in this models list route.

One thing to consider: users shouldn't be able to delete or update groups, just their association to them.

# /media

Returns a list of all media in the database.

## Request Example

HTTP Methods: POST, GET
`` fetch(`${BASE_URL}/media`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
If a post request, expects the following request body format
`{ time: Date, image: Image, title: "yourtitle", description: "a description", optionally, the request can include author: Foreign Key of accounts.Profile, hashtag: Foreign Key of community.Hashtag, group: Foreign Key of community.Group, }`

## Current status

The view is functional, allowing for viewing of current media and creation of new ones, if request is authenticated

## Future Development

This route does not seem complete.

The media model does not require an author to create a post. Most images in the site are being stored as CharFields, but this model stores its image as an ImageField, which may be a better option or might be something to change, depending on what further research determines. I also think it is odd that topics are a many-to-many relationship but hashtags are many-to-one.

# /media/<int:pk>

Returns a specific instance of the model that matches the passed pk

## Request Example

HTTP Methods: GET, UPDATE, DELETE
`` fetch(`${BASE_URL}/media/<int:pk>`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
if UPDATE request body should include an object with the name of the field you would like to update set to its new value ex. `{title: "King of England"}`

## Current Status

Route is currently functional, allowing for GET UPDATE and DELETE on individual instances

## Future Development

See Future Development in this models list route. One thing to consider: users should only be able to delete media that they have posted.

# /hashtags

Returns a list of all hashtags in the database.

## Request Example

HTTP Methods: POST, GET
`` fetch(`${BASE_URL}/hashtags`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
If a post request, expects the following request body format
`{ title: "yourtitle", description: "a description" }`

## Current status

The view is functional, allowing for viewing of current groups and creation of new ones, if request is authenticated

## Future Development

This route is complete. It is ready to be accessed by the front end. Possibly redundant with topics, see the Future Development of the topics list route below.

# /hashtags/<int:pk>

Returns a specific instance of the model that matches the passed pk

## Request Example

HTTP Methods: GET, UPDATE, DELETE
`` fetch(`${BASE_URL}/hashtags/<int:pk>`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
if UPDATE request body should include an object with the name of the field you would like to update set to its new value ex. `{title: "King of England"}`

## Current Status

Route is currently functional, allowing for GET UPDATE and DELETE on individual instances

## Future Development

See Future Development in this models list route.

# /events

Returns a list of all groups in the database.

## Request Example

HTTP Methods: POST, GET
`` fetch(`${BASE_URL}/events`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
If a post request, expects the following request body format
`{ title: "yourtitle", optionally, group: Foreign Key of community.Group location: Foreign Key of trip.Location }`

## Current status

We did not work very much on this part of the API during SEI 36. Currently the view is functional, allowing for viewing of current groups and creation of new ones, if request is authenticated

## Future Development

This route is complete. It is ready to be accessed by the front end. However, this model could use some work. Right now, it does not seem that the event model has all of its specs implemented. More research is needed. It might be redundant with the trip or activities models, and its functionality might be better served by one of those options.

# /events/<int:pk>

Returns a specific instance of the model that matches the passed pk

## Request Example

HTTP Methods: GET, UPDATE, DELETE
`` fetch(`${BASE_URL}/events/<int:pk>`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
if UPDATE request body should include an object with the name of the field you would like to update set to its new value ex. `{title: "King of England"}`

## Current Status

Route is currently functional, allowing for GET UPDATE and DELETE on individual instances

## Future Development

See Future Development in this models list route. One thing to consider: users maybe shouldn't be able to delete or update events, just their association to them, unless they are the creator of that event.

# /topics

Returns a list of all topics in the database.

## Request Example

HTTP Methods: POST, GET
`` fetch(`${BASE_URL}/topics`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
If a post request, expects the following request body format
`{ title: "yourtitle", description: "a description" }`

## Current status

We did not work very much on this part of the API during SEI 36. Currently the view is functional, allowing for viewing of current groups and creation of new ones, if request is authenticated

## Future Development

This route is complete. It is ready to be accessed by the front end.
However, topics and hashtags seem to be identical, which is redundant. It would be more coherent to just have topics, with a boolean added to the model that determines whether or not that topic is also a hashtag.

# /topics/<int:pk>

Returns a specific instance of the model that matches the passed pk

## Request Example

HTTP Methods: GET, UPDATE, DELETE
`` fetch(`${BASE_URL}/topics/<int:pk>`, { headers: { Authorization: `Token ${localStorage.getItem("token")}` } }) ``
if UPDATE request body should include an object with the name of the field you would like to update set to its new value ex. `{title: "King of England"}`

## Current Status

Route is functional, allowing for GET UPDATE and DELETE on individual instances

## Future Development

See Future Development in this models list route. One thing to consider: users shouldn't be able to delete or update topics, just their association to them.

# /posts

This route allows an authenticated user to create a post and view all posts from all users.

## Request Example:

HTTP Method: GET, POST
Request Headers: Authorization & Token
fetch(`${BASE_URL}/posts`,
{headers:
{
Authorization: `Token ${localStorage.getItem("token")}`
}
})
Body (for POST only):
{
"post_type": "Post",
"title": "HelloWorld",
"time": "2020-05-14T19:01:59.021103Z",
"body": "TESTING123456",
"likes": 0,
"author": 6,
"parent": [6]
}

- Note: When submitting this request, a user must be logged in, which will store an authorization token required for the request to be fulfilled.
- When testing this route in Postman, make sure the value at "author" is the same as the value at "user" when the user logs in via the <auth/login> route.

## Current Status

Fully functional.

## Future Development

This route is complete and ready for the front end to access.

# /posts/<int:pk>

This route allows an authenticated user to view, update, and delete ONLY their own post(s).

## Request Example

HTTP Method: GET, PATCH/PUT, DELETE
Request Headers: Authorization & Token
fetch(`${BASE_URL}/posts/17`,
{headers:
{
Authorization: `Token ${localStorage.getItem("token")}`
}
})
When submitting this request, a user must be logged in, which will store an authorization token required for the request to be fulfilled.
Body (PATCH/PUT and DELETE only):
{
"id": 17,
"post_type": "Post",
"title": "HelloWorld12345",
"time": "2020-05-15T18:08:05.800105Z",
"body": "TESTING123",
"likes": 0,
"author": 7,
"parent": [6]
}

## Current Status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /trips

Returns a list of all trips, or returns a list of trips by filter conditions: title, location, activity, start_date, end_date.

- title: the trip’s title. Get the list of trip which each trip’s title contains the filter’s title (ignore case). Filter by title with fuzzy query.
- location: the location’s id.Get the list of trip which each trip’s localtions contains the filter’s localtion.
- activity: the activity’s id. Get the list of trip which each trip’s activities contains the filter’s activity.
- start_date: Get the list of trip which each trip’s start_date >= the filter’s start_date.
- start_date: Get the list of trip which each trip’s end_date <= the filter’s end_date.

## Request Example

1. Get all trips
   HTTP Method: GET
   fetch(`${BASE_URL}/trips`, {
   headers: {
   Authorization: `Token ${localStorage.getItem(“token”)}`
   }
   })
2. Get trips by conditions
   HTTP Method: GET
   fetch(`${BASE_URL}/trips?title=Tokyo&location=1&start_date=2020-06-15`, {
   headers: {
   Authorization: `Token ${localStorage.getItem(“token”)}`
   }
   })
   ##Current status
   Fully functional.
   ##Future Development
   This route is complete and ready for the front end to access.
   #/trips/Upcoming
   Returns a list of all upcoming trips, or returns a list of upcoming trips by filter conditions: title, location, activity, start_date, end_date.

- title: the trip’s title. Get the list of trip which each trip’s title contains the filter’s title (ignore case). Filter by title with fuzzy query.
- location: the location’s id.Get the list of upcoming trip which each trip’s localtions contains the filter’s localtion.
- activity: the activity’s id. Get the list of upcoming trip which each trip’s activities contains the filter’s activity.
- start_date: Get the list of upcoming trip which each trip’s start_date >= the filter’s start_date.
- start_date: Get the list of upcoming trip which each trip’s end_date <= the filter’s end_date.

## Request Example

1. Get all upcoming trips
   HTTP Method: GET
   fetch(`${BASE_URL}/trips/upcoming`, {
   headers: {
   Authorization: `Token ${localStorage.getItem(“token”)}`
   }
   })
2. Get upcoming trips by conditions
   HTTP Method: GET
   fetch(`${BASE_URL}/trips/upcoming?title=Tokyo&location=1&start_date=2020-06-15`, {
   headers: {
   Authorization: `Token ${localStorage.getItem(“token”)}`
   }
   })
   ##Current status
   Fully functional.
   ##Future Development
   This route is complete and ready for the front end to access.
   #/trips/<int:pk>
   Returns a specific trip that matches the passed pk
   ##Request Example
   HTTP Methods: GET
   fetch(`${BASE_URL}/trips/<int:pk>`, {
   headers: {
   Authorization: `Token ${localStorage.getItem(“token”)}`
   }
   })

## Current Status

Route is only for get method. Didn’t provide UPDATE and DELETE.

## Future Development

If future development determine which kind of user can update or delete a specific trip, then can add the UPDATE and DELETE method for this route.

# /location

Returns a list of all locations.

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/location`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /location/states

Returns all of the U.S states

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/location/states`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /location/bystate

Returns a list of locations by specific state.

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/location/bystate?state__code=CA`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /location/<int:pk>

Returns a specific location that matches the passed pk

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/location/<int:pk>`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /activity

Returns a list of activity.

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/activity`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current status

Fully functional.

## Future Development

This route is complete and ready for the front-end to access.

# /activity/<int:pk>

Returns a specific activity that matches the passed pk

## Request Example

HTTP Methods: GET
fetch(`${BASE_URL}/activity/<int:pk>`, {
headers: {
Authorization: `Token ${localStorage.getItem(“token”)}`
}
})

## Current Status

Route is only for get method. Didn’t provide UPDATE and DELETE.

## Future Development

If future development determine which kind of user can update or delete a specific activity, then can add the UPDATE and DELETE method for this route.
