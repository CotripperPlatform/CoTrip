import React from 'react';
import PersonCard from './PersonCard';
import image from "../../assets/images/card_profile2.png";
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
.add("Default", () => <PersonCard
  image={image}
  name="Lindsay L." 
  location="Washington D.C." 
  interests={[ 
  { url: "#", interests: "veganism" },
  { url: "#", interests: "budgeting" },
  { url: "#", interests: "travel" },
  { url: "#", interests: "outdoors"}
]}/>)
