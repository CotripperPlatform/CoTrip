import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import ProfileImage from "../../assets/images/profile_large.png";

function handleClick() {
  console.log("clicked");
}

storiesOf("Navbar", module)
  .add("Default", () => (
    <Navbar profileImage={ProfileImage} burgerClick={handleClick} showCondensedMenu={false} />
  ))
  // Breakpoint must be achieved for this to fully deisplay (max-width: 992px)
  .add("Condensed Menu", () => (
    <Navbar profileImage={ProfileImage} burgerClick={handleClick} showCondensedMenu={true} />
  ));