import React from 'react';
import PersonCard from './PersonCard';
import Image from "../../assets/images/profile_large.png";
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
.add("Default", () => <PersonCard
  image type="large" image={Image} 
  name="Lindsay L." 
  location="Washington D.C." 
  interests={[ 
  { url: "#", interests: "veganism" },
  { url: "#", interests: "budgeting" },
  { url: "#", interests: "travel" },
  { url: "#", interests: "outdoors"}
]}/>)
