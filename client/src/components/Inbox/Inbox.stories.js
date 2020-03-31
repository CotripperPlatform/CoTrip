import React from 'react';
import { storiesOf } from '@storybook/react';
import Inbox from './Inbox';

storiesOf('Inbox', module)
  .add("Default", () => (
    <Inbox />
  )
)
