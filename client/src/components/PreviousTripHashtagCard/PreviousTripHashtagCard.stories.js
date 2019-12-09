import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripHashtagCard from "./PreviousTripHashtagCard";

storiesOf("PreviousTripHashtagCard", module)
  .add("Previous Trips, No Data", () => (
    <PreviousTripHashtagCard data={[]} type="trips">
      <h1>Previous Trips</h1>
      <h2>None with CoTripper yet!</h2>
      <a href="#">Book a Trip Now!</a>
    </PreviousTripHashtagCard>
  ))
  .add("Previous Trips", () => (
    <PreviousTripHashtagCard
      data={["New York", "Mexico", "Wakanda", "Hawaii", "Japan", "Canada", "Italy"]}
      type="trips"
    >
      <h1>Previous Trips</h1>
    </PreviousTripHashtagCard>
  ))
  .add("Previous Trips, Lots of Data", () => (
    <PreviousTripHashtagCard
      data={[
        "New York",
        "Mexico",
        "Wakanda",
        "Hawaii",
        "Japan",
        "Canada",
        "Italy",
        "Valhalla",
        "Crait",
        "Hylia",
        "Shambala",
        "Jakku",
        "North Pole"
      ]}
      type="trips"
      header="Previous Trips"
    >
      <h1>Previous Trips</h1>
    </PreviousTripHashtagCard>
  ))
  .add("Trending Hashtags", () => (
    <PreviousTripHashtagCard
      data={[
        "#dope",
        "#torch",
        "#hawaii",
        "#kids",
        "#cats",
        "#dogs",
        "#italy",
        "#starwars",
        "#babyyoda"
      ]}
      type="hashtags"
      header="Trending Hashtags"
    >
      <h1>Trending Hashtags</h1>
    </PreviousTripHashtagCard>
  ))
  .add("Trending Hashtags, No Data", () => (
    <PreviousTripHashtagCard data={[]} type="hashtags" header="Trending Hashtags">
      <h1>Trending Hashtags</h1>
      <h2>None with CoTripper yet!</h2>
    </PreviousTripHashtagCard>
  ))
  .add("Empty Card", () => (
    <PreviousTripHashtagCard data={[]} type="trips"></PreviousTripHashtagCard>
  ))
  .add("Slider Card", () => (
    <PreviousTripHashtagCard data={[]} type="trips slider">
      <h1>Previous Trips</h1>
    </PreviousTripHashtagCard>
  ));
