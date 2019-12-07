import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Pill from "./Pill";
const topic = "Passed as a Prop";
storiesOf("Pill", module).add("Default", () => <Pill topic={topic} />);
