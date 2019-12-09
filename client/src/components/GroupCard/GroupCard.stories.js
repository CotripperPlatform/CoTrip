import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupCard from './GroupCard';

storiesOf('GroupCard', module)
  .add("Default", () => <GroupCard
    name="Group Name"
    members="# of members"
    location="Location, State"
  />)
