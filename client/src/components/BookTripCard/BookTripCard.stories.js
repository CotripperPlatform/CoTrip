import React from 'react';
import { storiesOf } from '@storybook/react';
import BookTripCard from './BookTripCard';

storiesOf('BookTripCard', module)
  .add("Default", () => (
    <BookTripCard />
  )
)
