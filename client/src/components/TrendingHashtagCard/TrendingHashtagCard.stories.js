import React from "react";
import { storiesOf } from "@storybook/react";
import TrendingHashtagCard from "./TrendingHashtagCard";

export default {
  title: "Cards/TrendingHashtagCard"
};

storiesOf("Cards/TrendingHashtagCard", module)
  .add("Default", () => (
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
  ))
  .add("Default, No Data", () => (
    <TrendingHashtagCard data={[]}>
      <h1>Trending Hashtags</h1>
      <h2>No Hashtags :(</h2>
    </TrendingHashtagCard>
  ))
  .add("Default, Lots of data", () => (
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
        "#babyyoda",
        "#gaming",
        "#sports",
        "#haikus",
        "#surfing",
        "#momfacts",
        "#dadfacts",
        "#catfacts"
      ]}
    >
      <h1>Trending Hashtags</h1>
    </TrendingHashtagCard>
  ))
  .add("Default, Little data", () => (
    <TrendingHashtagCard data={["#dope", "#torch", "#hawaii", "#kids"]}>
      <h1>Trending Hashtags</h1>
    </TrendingHashtagCard>
  ));
