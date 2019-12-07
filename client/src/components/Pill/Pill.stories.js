import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Pill from "./Pill";
const text = "Passed as a Prop";
const backgroundColor = "orange";
storiesOf("Pill", module).add("Default", () => (
  <Pill text={text} backgroundColor={backgroundColor} />
));
