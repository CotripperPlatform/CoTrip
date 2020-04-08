import React from 'react';
import { storiesOf } from '@storybook/react';
import PersonCardDiscover from './PersonCardDiscover';

storiesOf('Layout/Cards/PersonCardDiscover', module)
  .add("Default", () => (
    <PersonCardDiscover />
  )
)
