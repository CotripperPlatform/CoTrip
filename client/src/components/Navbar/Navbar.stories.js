import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';
import ProfileImage from "../../assets/images/profile_large.png";

function handleClick() {
  console.log("clicked");
}

storiesOf("Navbar", module).add("Default", () => (
  <Navbar
    profileImage={ProfileImage}
    searchClick={handleClick}
    messageClick={handleClick}
    burgerClick={handleClick}
    showCondensedMenu={true}
    condensedMenu="Navbar__show"
    menu2="Navbar__show"
  />
));