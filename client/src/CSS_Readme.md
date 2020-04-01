# Description

This Readme is built to explain how we should model our CSS.

## Getting Started

These instructions will help you get started on standardizing CSS across the project.

### CSS Variables

- We've set up CSS Variables that allow for scalable CSS changes that do not require code to be changed in every single component.
- Check out [this documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to get more details.

Look at [App.css](src/App.css) to see how we've set up these variables that can be applied down to the individual component level. An example is:

`root: { --yellow: #ffcb06; }`

This code is applied at the root level and referenced at the component level. At the Component level you would see:

`.Banner { color: var(--white); }`

#### CSS Class Names using BEM

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

```

```
