import React from 'react';
import PersonCard from './personcard';
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
  .add("Default", () => <PersonCard
  momName="Lindsay L." 
  location="Washington D.C." 
  interests="#budgeting #technology #outdoors #traveling"
  />)