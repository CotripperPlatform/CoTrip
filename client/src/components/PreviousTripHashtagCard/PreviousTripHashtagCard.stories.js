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
  .add("Trending Hashtags", () => (
    <PreviousTripHashtagCard
      data={["#dope", "#torch", "#hawaii", "#kids", "#cats", "#dogs", "#Italy"]}
      type="hashtags"
    />
  ))
  .add("Trending Hashtags, Empty", () => <PreviousTripHashtagCard data={[]} type="hashtags" />);
