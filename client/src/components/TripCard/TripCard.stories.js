import React from "react";
import { storiesOf } from "@storybook/react";
import TripCard from "./TripCard";

storiesOf("TripCard", module).add("Default", () => (
  <TripCard url="https://wallpaperaccess.com/full/144067.jpg" text={["Hawaii", "May 2020"]} />
));
