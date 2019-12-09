import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoCard from './InfoCard';

storiesOf('InfoCard', module)
  .add("Default", () => (
    <InfoCard />
  )
)
