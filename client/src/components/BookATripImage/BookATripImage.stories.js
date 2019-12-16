import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripImage from './BookATripImage';

storiesOf('BookATripImage', module)
  .add("Default", () => <BookATripImage
  images={[
    "hawaii",
    "greece",
    "southernCaribbean",
    "hawaii",
    "easternCaribbean"
  ]}
/>)
