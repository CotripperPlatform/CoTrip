import React from 'react';
import PersonCard from './PersonCard';
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
  .add("Default", () => <PersonCard
  PersonCard__name="Lindsay L." 
  PersonCard__location="Washington D.C." 
  PersonCard__interests={[ 
  { url: "#", interests: "veganism" },
  { url: "#", interests: "budgeting" },
  { url: "#", interests: "travel" },
  { url: "#", interests: "outdoors"}
]}
  />)