import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupCard from './GroupCard';
import picture from "../../assets/images/card_small1.png";

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
    picture={picture}
  />)
