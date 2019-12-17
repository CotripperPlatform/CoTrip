import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripPage from './BookATripPage';
import Banner__pink from "../Banner/Banner__pink.png";

storiesOf('BookATripPage', module)
  .add("Default", () => <BookATripPage
    header="Upcoming Trips"
    background={Banner__pink}
  />)
