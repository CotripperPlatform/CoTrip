import React from 'react';
import { storiesOf } from '@storybook/react';
import ActivityList from './ActivityList';

storiesOf('ActivityList', module)
  .add("Default", () => (
    <ActivityList />
  ))
  .add("Mom", () => (
    <ActivityList
      type='mom'
      label='Mom'
    />
  ))
  .add("Kids", () => (
    <ActivityList
      type='kids'
      label='Mom & Kids'
    />
  ))