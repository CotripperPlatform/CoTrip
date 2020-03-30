import React from "react";
import { storiesOf } from "@storybook/react";
import BannerImageCard from "./BannerImageCard";
import Banner__Image from "../../assets/images/TripBanner.png";

export default {
  title: "Cards/BannerImageCard"
};

storiesOf("Cards/BannerImageCard", module)
  .add("BannerImageCard", () => <BannerImageCard background={Banner__Image} />)
  .add("BannerImageCard with text", () => (
    <BannerImageCard background={Banner__Image} message="Hawaii 2020" />
  ));
