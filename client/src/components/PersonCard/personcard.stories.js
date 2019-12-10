import React from 'react';
import PersonCard from './personcard';
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
  .add("Default", () => <PersonCard
  PersonCard__name="Lindsay L." 
  PersonCard__location="Washington D.C." 
  PersonCard__interests={[ 
  { url: "#", PersonCard__interests: "veganism" },
  { url: "#", PersonCard__interests: "budgeting" },
  { url: "#", PersonCard__interests: "travel" },
  { url: "#", PersonCard__interests: "outdoors"}
]}
  />)