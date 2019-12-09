import React from 'react';
import IndividualMomBox from './personcard';
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
  .add("Default", () => <IndividualMomBox
  momName="Lindsay L." 
  location="Washington D.C." 
  interests="#budgeting #technology #entrepreneurship #traveling"
  />)