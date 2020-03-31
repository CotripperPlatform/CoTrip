import React from "react";
import { storiesOf } from "@storybook/react";
import GroupsList from "./GroupsList";

storiesOf("Layout/Groups List", module).add("Default", () => (
  <GroupsList heading="Her Groups" moreGroups="View All" to="/" />
));
