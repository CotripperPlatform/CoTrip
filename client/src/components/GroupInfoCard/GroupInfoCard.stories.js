import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupInfoCard from './GroupInfoCard';

storiesOf('GroupInfoCard', module)
  .add("Default", () => (
    <GroupInfoCard />
  )
)
