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

storiesOf("ActivityList", module).add("Default", () => (
  <ActivityList momActivityList={momActivityList} kidsActivityList={kidsActivityList} />
));
