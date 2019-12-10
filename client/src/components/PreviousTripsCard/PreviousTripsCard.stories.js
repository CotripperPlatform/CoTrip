import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripsCard from "./PreviousTripsCard";

storiesOf("PreviousTripsCard", module)
  .add("Default", () => (
    <PreviousTripsCard trips={true} link="/">
      <h1>Previous Trips</h1>
      <div>placeholder</div>
      <div>placeholder</div>
    </PreviousTripsCard>
  ))
  .add("Default, No Trips", () => (
    <PreviousTripsCard trips={false}>
      <h1>Previous Trips</h1>
      <h2>None with CoTripper yet!</h2>
      <a href="/">Book a Trip Now!</a>
    </PreviousTripsCard>
  ))
  .add("Default, One Trip", () => (
    <PreviousTripsCard trips={true} link="/">
      <h1>Previous Trips</h1>
      <div>placeholder</div>
    </PreviousTripsCard>
  ));
