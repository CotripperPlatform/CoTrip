import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripsCard from "./PreviousTripsCard";

storiesOf("PreviousTripsCard", module).add("Default", () => (
  <PreviousTripsCard>
    <h1>Trending Hashtags</h1>
  </PreviousTripsCard>
));
