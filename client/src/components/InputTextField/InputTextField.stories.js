import React from "react";
import { storiesOf } from "@storybook/react";
import InputTextField from "./InputTextField";

storiesOf("InputTextField", module)
  // this component has an optional 'type' prop to change size to small
  .add("Email", () => <InputTextField name="email" placeholder="Email" />)
  .add("Name", () => <InputTextField name="name" placeholder="Name" />)
  .add("City", () => <InputTextField name="city" placeholder="City of Residence" />)
  .add("Age", () => <InputTextField name="age" placeholder="What is your age?" />)
  .add("Dream", () => (
    <InputTextField name="dream" placeholder="What is your dream destination(s)?" />
  ))
  .add("First Name, Small", () => (
    <InputTextField type="small" name="first name" placeholder="First Name" />
  ))
  .add("Last Name, Small", () => (
    <InputTextField type="small" name="last name" placeholder="Last Name" />
  ))
  .add("Email Small", () => <InputTextField type="small" name="email" placeholder="Email" />)
  .add("Password", () => <InputTextField name="password" placeholder="Password" />)
  .add("Confirm Password", () => (
    <InputTextField name="confirm password" placeholder="Confirm Password" />
  ))
  .add("Search Directory", () => (
    <InputTextField name="search directory" placeholder="Search Directory" />
  ))
  .add("Search Trips", () => <InputTextField name="search trips" placeholder="Search Trips" />);
