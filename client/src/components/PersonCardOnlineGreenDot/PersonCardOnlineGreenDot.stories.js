import React from 'react';
import { storiesOf } from '@storybook/react';
import PersonCardOnlineGreenDot from './PersonCardOnlineGreenDot';

storiesOf('Layout/Cards/PersonCardOnlineGreenDot', module)
  .add("Default", () => (
    <PersonCardOnlineGreenDot />
  )
)
