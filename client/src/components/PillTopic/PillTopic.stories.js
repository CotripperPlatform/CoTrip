import React from 'react';
import { storiesOf } from '@storybook/react';
import PillTopic from './PillTopic';

storiesOf('PillTopic', module)
  .add("Default", () => (
    <PillTopic />
  )
)
