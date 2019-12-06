import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoCard from './InfoCard';

storiesOf('InfoCard', module)
  .add("Group Info Card", () => <InfoCard 
    name="Group Name"
    members="# of Members"
    location="Location, State"
  />)
  .add("Location Info Card", () => <InfoCard 
    name="Location"
    date="Month Year"
  />)
