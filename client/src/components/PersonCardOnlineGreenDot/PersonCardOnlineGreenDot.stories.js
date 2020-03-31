import React from 'react';
import { storiesOf } from '@storybook/react';
import image  from "../../assets/images/profile-picture-1.png";
import PersonCardOnlineGreenDot from './PersonCardOnlineGreenDot';

storiesOf('PersonCardOnlineGreenDot', module)
  .add("Default", () => (
    <PersonCardOnlineGreenDot 
    image={image}
    name="Lindsay L."
    location="Washington D.C."
    interests={[
      { url: "#", interests: "veganism" },
      { url: "#", interests: "budgeting" },
      { url: "#", interests: "travel" },
      { url: "#", interests: "outdoors" }
    ]}/>
  )
)
