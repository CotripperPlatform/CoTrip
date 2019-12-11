import React from "react";
import { storiesOf } from "@storybook/react";
import TripCard from "./TripCard";
import example1 from "../../../../assets/images/card_small2.png";

storiesOf("TripCard", module)
  .add("Default", () => (
    <TripCard src="https://wallpaperaccess.com/full/144067.jpg" location="Hawaii" date="May 2020" />
  ))
  .add("Puerto Rico", () => <TripCard src={example1} location="Puerto Rico" date="April 2019" />);
