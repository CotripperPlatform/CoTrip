import React from 'react';
import { storiesOf } from '@storybook/react';
import PinkHeader from './PinkHeader';

storiesOf('PinkHeader', module)
  .add("Default", () => (
    <PinkHeader placeholder="Search My Directory" 
                type="search"/>
  )
)
