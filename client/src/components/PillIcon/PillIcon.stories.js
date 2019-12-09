import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import PillIcon from "./PillIcon";
const text = "Los Angeles";
storiesOf("PillIcon", module).add("Default", () => (
  <PillIcon text={text} backgroundColor={"#fb836f"} />
));
