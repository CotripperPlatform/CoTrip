import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripPage from './BookATripPage';
import Banner__pink from "../Banner/Banner__pink.png";

storiesOf('BookATripPage', module)
  .add("Default", () => <BookATripPage
    background={Banner__pink}
  />)
