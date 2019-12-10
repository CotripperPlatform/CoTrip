import React from "react";
import { storiesOf } from "@storybook/react";
import TripCard from "./TripCard";

storiesOf("TripCard", module).add("Default", () => (
  <TripCard path="https://wallpaperaccess.com/full/144067.jpg" location="Hawaii" date="May 2020" />
));
