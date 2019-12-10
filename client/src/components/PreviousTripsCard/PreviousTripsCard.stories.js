import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripsCard from "./PreviousTripsCard";

storiesOf("PreviousTripsCard", module)
  .add("Default", () => (
    <PreviousTripsCard
      trips={true}
      link="https://www.figma.com/file/ggst6OoJWkwaV2DGq4nBzA/CoTripper?node-id=0%3A1"
    >
      <h1>Trending Hashtags</h1>
      <div>1</div>
      <div>2</div>
    </PreviousTripsCard>
  ))
  .add("Default, No Trips", () => (
    <PreviousTripsCard
      trips={false}
      link="https://www.figma.com/file/ggst6OoJWkwaV2DGq4nBzA/CoTripper?node-id=0%3A1"
    >
      <h1>Trending Hashtags</h1>
      <h2>None with CoTripper yet!</h2>
      <a href="#">Book a Trip Now!</a>
    </PreviousTripsCard>
  ));
