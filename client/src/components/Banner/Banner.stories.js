import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";

storiesOf("Banner", module)
  .add("Home Banner", () => <Banner bannerType="home" />)
  .add("Community Banner", () => <Banner bannerType="community" />)
  .add("Profile Banner", () => <Banner bannerType="profile" />);
