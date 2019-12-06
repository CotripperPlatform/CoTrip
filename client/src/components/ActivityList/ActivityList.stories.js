import React from 'react';
import { storiesOf } from '@storybook/react';
import ActivityList from './ActivityList';

storiesOf('ActivityList', module)
  .add("Default", () => (
    <ActivityList />
  )
)
