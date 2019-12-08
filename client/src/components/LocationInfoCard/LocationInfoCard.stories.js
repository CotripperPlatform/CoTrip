import React from 'react';
import { storiesOf } from '@storybook/react';
import LocationInfoCard from './LocationInfoCard';

storiesOf('LocationInfoCard', module)
  .add("Default", () => (
    <LocationInfoCard />
  )
)
