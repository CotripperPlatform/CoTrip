import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';

storiesOf('Navbar', module)
  .add("Default", () => (
    <Navbar />
  )
)
