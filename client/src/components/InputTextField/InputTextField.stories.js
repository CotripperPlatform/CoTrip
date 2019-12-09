import React from "react";
import { storiesOf } from "@storybook/react";
import InputTextField from "./InputTextField";

storiesOf("InputTextField", module)
  .add("Email", () => <InputTextField input="text" name="email" placeholder="Email" />)
  .add("Name", () => <InputTextField input="text" name="name" placeholder="Name" />)
  .add("City", () => <InputTextField input="text" name="city" placeholder="City of Residence" />)
  .add("Age", () => <InputTextField input="text" name="age" placeholder="What is your age?" />)
  .add("Dream", () => (
    <InputTextField input="text" name="dream" placeholder="What is your dream destination(s)?" />
  ))
  .add("First Name, Small", () => (
    <InputTextField input="text" type="small" name="first name" placeholder="First Name" />
  ))
  .add("Last Name, Small", () => (
    <InputTextField input="text" type="small" name="last name" placeholder="Last Name" />
  ))
  .add("Email Small", () => (
    <InputTextField input="text" type="small" name="email" placeholder="Email" />
  ))
  .add("Password", () => <InputTextField input="password" name="password" placeholder="Password" />)
  .add("Confirm Password", () => (
    <InputTextField input="password" name="confirm password" placeholder="Confirm Password" />
  ))
  .add("Search Directory", () => (
    <InputTextField
      input="text"
      type="search"
      name="search directory"
      placeholder="Search Directory"
    />
  ))
  .add("Search Trips", () => (
    <InputTextField input="text" type="search" name="search trips" placeholder="Search Trips" />
  ));
