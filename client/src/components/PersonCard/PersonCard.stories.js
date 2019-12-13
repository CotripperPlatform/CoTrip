import React from 'react';
import PersonCard from './PersonCard';
import Image from "../../assets/images/profile_large.png";
import { storiesOf } from '@storybook/react';

storiesOf('PersonCard', module)
.add("Default", () => <PersonCard
  PersonCard__image type="large" image={Image} 
  PersonCard__name="Lindsay L." 
  PersonCard__location="Washington D.C." 
  PersonCard__interests={[ 
  { url: "#", interests: "veganism" },
  { url: "#", interests: "budgeting" },
  { url: "#", interests: "travel" },
  { url: "#", interests: "outdoors"}
]}/>)
