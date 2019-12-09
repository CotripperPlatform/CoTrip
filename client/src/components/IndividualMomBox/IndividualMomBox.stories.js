import React from 'react';
import IndividualMomBox from './IndividualMomBox';
import { storiesOf } from '@storybook/react';

storiesOf('IndividualMomBox', module)
  .add("Default", () => <IndividualMomBox
  momName="Lindsay L." 
  location="Washington D.C. #budgeting #technology #entrepreneurship #traveling"
  />)


//Cool