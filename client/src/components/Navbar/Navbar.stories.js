import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import ProfileImage from "../../../../assets/images/profile_large.png";

storiesOf('Navbar', module)
  .add("Default", () => (
    <Navbar profileImage={ProfileImage}/>
  )
)
