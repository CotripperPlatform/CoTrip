import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripsCard from "./PreviousTripsCard";
import TripCard from "../TripCard/TripCard";
import Card from "../Card/Card";
import example1 from "../../assets/images/card_small2.png";

storiesOf("PreviousTripsCard", module)
  .add("Default, Two Trips", () => (
    <PreviousTripsCard trips={true} link="/">
      <h1>Previous Trips</h1>
      <TripCard src={example1} location="Puerto Rico" date="April 2019" />
      <TripCard
        src="https://wallpaperaccess.com/full/144067.jpg"
        location="Hawaii"
        date="May 2020"
      />
    </PreviousTripsCard>
  ))
  .add("Default, One Trip", () => (
    <PreviousTripsCard trips={true} link="/">
      <h1>Previous Trips</h1>
      <TripCard src={example1} location="Puerto Rico" date="April 2019" />
      <Card outline size="medium">
        <a href="/">Book a new Trip!</a>
      </Card>
    </PreviousTripsCard>
  ))
  .add("Default, No Trips", () => (
    <PreviousTripsCard trips={false}>
      <h1>Previous Trips</h1>
      <h2>None with CoTripper yet!</h2>
      <a href="/">Book a Trip Now!</a>
    </PreviousTripsCard>
  ));
