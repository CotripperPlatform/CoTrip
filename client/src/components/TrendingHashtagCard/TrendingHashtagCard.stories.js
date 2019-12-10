import React from "react";
import { storiesOf } from "@storybook/react";
import TrendingHashtagCard from "./TrendingHashtagCard";

storiesOf("TrendingHashtagCard", module).add("Default", () => (
  <TrendingHashtagCard
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
  >
    <h1>Trending Hashtags</h1>
  </TrendingHashtagCard>
));
