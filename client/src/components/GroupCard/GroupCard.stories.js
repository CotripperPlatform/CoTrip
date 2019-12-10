import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupCard from './GroupCard';

storiesOf('GroupCard', module)
  .add("Default", () => <GroupCard
    name="Group Name"
    members="# of "
    location="Location, State"
  />)
  .add("Example", () => <GroupCard
    name="DIY with your kids"
    members="98"
    location="Boston, MA"
    url="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
  />)
