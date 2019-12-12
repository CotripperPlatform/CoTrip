import React from "react";
import { storiesOf } from "@storybook/react";
import ActivityList from "./ActivityList";

// let momActivityList = ["Spa", "Wine Nights", "Brunch with Other Moms"];
let activities = [
  "Snorkeling",
  "Hiking",
  "Island Hopping",
  "Hawaiian Luaus",
  "Food Markets",
  "Beaches"
];

storiesOf("ActivityList", module)
  .add("Activities for Moms", () => (
    <ActivityList label="Activities for Moms" activities={activities} />
  ))
  .add("Activities for Moms & Kids", () => (
    <ActivityList label="Activities for Moms & Kids" activities={activities} />
  ));
