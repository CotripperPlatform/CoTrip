import React from "react";
import { storiesOf } from "@storybook/react";
import BannerParent from "./BannerParent";

storiesOf("BannerParent", module)
  .add("Home Banner", () => <BannerParent bannerType="home" />)
  .add("Community Banner", () => <BannerParent bannerType="community" />)
  .add("Profile Banner", () => <BannerParent bannerType="profile" />);
