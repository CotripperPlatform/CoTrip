import React from 'react';
import PersonCard from './personcard';
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
  .add("Default", () => <PersonCard
  PersonCard__ProfileName="Lindsay L." 
  PersonCard__Location="Washington D.C." 
  PersonCard__Interests="#budgeting #technology #outdoors #traveling"
  />)