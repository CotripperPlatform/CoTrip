import React from 'react';
import { storiesOf } from '@storybook/react';
import UpcomingEventsCard from './UpcomingEventsCard';

storiesOf('UpcomingEventsCard', module)
  .add("Default", () => (
    <UpcomingEventsCard />
  )
)
