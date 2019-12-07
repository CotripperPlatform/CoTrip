import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import PillIcon from "./PillIcon";
const text = "Passed as a Prop";
const backgroundColor = "orange";
storiesOf("PillIcon", module).add("Default", () => (
  <PillIcon text={text} backgroundColor={backgroundColor} />
));
