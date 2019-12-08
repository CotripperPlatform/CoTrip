import React from 'react';
import IndividualMomBox from './IndividualMomBox';
import { storiesOf } from '@storybook/react';
storiesOf('IndividualMomBox', module)
  .add("Default", () => (
    <IndividualMomBox />
  )
)
