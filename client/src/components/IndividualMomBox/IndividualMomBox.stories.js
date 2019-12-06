import React from 'react';
import { storiesOf } from '@storybook/react';
import IndividualMomBox from './IndividualMomBox';

storiesOf('IndividualMomBox', module)
  .add("Default", () => (
    <IndividualMomBox />
  )
)
