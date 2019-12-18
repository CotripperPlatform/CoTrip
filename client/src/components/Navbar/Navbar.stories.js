import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import ProfileImage from "../../assets/images/profile-picture-1.png";

storiesOf("Navbar", module).add("Default", () => (
  <Navbar
    to={"/"}
    profileImage={ProfileImage}
    page={0}
  />
)); 