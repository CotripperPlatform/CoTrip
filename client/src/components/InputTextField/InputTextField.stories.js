import React from "react";
import { storiesOf } from "@storybook/react";
import InputTextField from "./InputTextField";

storiesOf("InputTextField", module)
  .add("Email", () => <InputTextField type="Email" />)
  .add("Name", () => <InputTextField type="Name" />)
  .add("City", () => <InputTextField type="City" />)
  .add("Age", () => <InputTextField type="Age" />)
  .add("Dream", () => <InputTextField type="Dream" />)
  .add("First Name", () => <InputTextField type="First Name" />)
  .add("Last Name", () => <InputTextField type="Last Name" />)
  .add("Password", () => <InputTextField type="Password" />)
  .add("Confirm Password", () => <InputTextField type="Confirm Password" />);
