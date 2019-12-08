import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripHashtagCard from "./PreviousTripHashtagCard";

storiesOf("PreviousTripHashtagCard", module)
  .add("Previous Trips, Empty", () => <PreviousTripHashtagCard data={[]} type="trips" />)
  .add("Previous Trips", () => (
    <PreviousTripHashtagCard
      data={["New York", "Mexico", "Wakanda", "Hawaii", "Japan", "Canada", "Italy"]}
      type="trips"
    />
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
    />
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
    />
  ))
  .add("Trending Hashtags, Empty", () => <PreviousTripHashtagCard data={[]} type="hashtags" />);
