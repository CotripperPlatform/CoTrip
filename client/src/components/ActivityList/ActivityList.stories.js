import React from "react";
import { storiesOf } from "@storybook/react";
import ActivityList from "./ActivityList";

// let momActivityList = ["Spa", "Wine Nights", "Brunch with Other Moms"];
let momActivities = ["Spa", "Wine Nights", "Brunch with Other Moms"];
let kidsActivities = [
  "Snorkeling",
  "Hiking",
  "Island Hopping",
  "Hawaiian Luaus",
  "Food Markets",
  "Beaches"
];

storiesOf("ActivityList", module)
  .add("Activities for Moms", () => (
    <ActivityList title="Activities for Moms" activities={momActivities} color="purple" />
  ))
  .add("Activities for Moms & Kids", () => (
    <ActivityList title="Activities for Moms & Kids" activities={kidsActivities} color="red" />
  ));
