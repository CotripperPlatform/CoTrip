import React from "react";
import { storiesOf } from "@storybook/react";
import GroupsList from "./GroupsList";

export default {
  title: "Layout/Groups List"
};

storiesOf("Layout/Groups List", module).add("Default", () => (
  <GroupsList heading="Her Groups" moreGroups="View All" to="/" />
));
