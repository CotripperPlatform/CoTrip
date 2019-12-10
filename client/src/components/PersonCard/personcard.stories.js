import React from 'react';
import { storiesOf } from '@storybook/react';
import PersonCard from './personcard';

storiesOf('PersonCard', module)
  .add("Default", () => <PersonCard
  momName="Lindsay L." 
  location="Washington D.C." 
  interests="#budgeting #technology #entrepreneurship #traveling"
  />)