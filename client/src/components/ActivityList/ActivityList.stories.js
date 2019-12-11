import React from "react";
import { storiesOf } from "@storybook/react";
import ActivityList from "./ActivityList";

let momActivityList = ["Spa", "Wine Nights", "Brunch with Other Moms"];
let kidsActivityList = [
  "Snorkeling",
  "Hiking",
  "Island Hopping",
  "Hawaiian Luaus",
  "Food Markets",
  "Beaches"
];

storiesOf("ActivityList", module)
  .add("Activities for Moms", () => (
    <ActivityList color="purple" label="Activities for Moms" activities={momActivityList} />
  ))
  .add("Activities for Moms & Kids", () => (
    <ActivityList color="red" label="Activities for Moms & Kids" activities={kidsActivityList} />
  ));
