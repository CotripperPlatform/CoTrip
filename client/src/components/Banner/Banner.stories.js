import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
import { checkPropTypes } from "prop-types";

storiesOf("Banner", module)
  .add("Home Banner", () => <Banner 
        bannerType='var(--home-banner)' 
        />)

  .add("Home Banner with text", () => 
  <Banner bannerType='var(--home-banner)'>
    <h1>xyx</h1>
  </Banner>)

  .add("Community Banner", () => <Banner bannerType='var(--community-banner)' />)
  
  .add("Profile Banner", () => <Banner bannerType='var(--profile-banner)' />);
