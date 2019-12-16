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
  descriptions={[
    "Hawaii May 2020",
    "Greece & Croatia Cruise June 2020",
    "Southern Caribbean Cruise July 2020",
    "Western Mediterranean Cruise August 2010",
    "Eastern Caribbean Cruise New Year's 2021"
  ]}
/>)
