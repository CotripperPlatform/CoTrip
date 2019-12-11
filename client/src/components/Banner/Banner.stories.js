import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";

import { checkPropTypes } from "prop-types";

storiesOf("Banner", module)
  .add("Home Banner", () => <Banner
    bannerType='var(--home-banner)'
    bannerHeight='380px'
  />)
  .add("Home Banner with Welcome text", () =>
    <Banner bannerType='var(--home-banner)' bannerHeight='380px' bannerText='Welcome,' bannerFontSize='80px' bannerLineHeight='120px'>
      <h2>Welcome,</h2>
    </Banner>
  )
  .add("Home Banner with Welcome Back text", () =>
    <Banner bannerType='var(--home-banner)' bannerHeight='380px' bannerText='Welcome,' bannerFontSize='80px' bannerLineHeight='120px'>
      <h2>Welcome Back,</h2>
    </Banner>
  )

  .add("Community Banner", () => <Banner
    bannerType='var(--community-banner)'
  />)
  .add("Community Banner with input", () =>
    <Banner bannerType='var(--community-banner)'>
      <h3>Community: People</h3>
      <input/>
    </Banner>
  )


  .add("Profile Banner", () => <Banner bannerType='var(--profile-banner)' />);
