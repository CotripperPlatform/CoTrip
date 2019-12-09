import React from "react";
import { storiesOf } from "@storybook/react";
import InputTextField from "./InputTextField";

storiesOf("InputTextField", module)
  .add("Email", () => <InputTextField type="default" name="email" placeholder="Email" />)
  .add("Name", () => <InputTextField type="default" name="name" placeholder="Name" />)
  .add("City", () => <InputTextField type="default" name="city" placeholder="City of Residence" />)
  .add("Age", () => <InputTextField type="default" name="age" placeholder="What is your age?" />)
  .add("Dream", () => (
    <InputTextField type="default" name="dream" placeholder="What is your dream destination(s)?" />
  ))
  .add("First Name, Small", () => (
    <InputTextField type="small" name="first name" placeholder="First Name" />
  ))
  .add("Last Name, Small", () => (
    <InputTextField type="small" name="last name" placeholder="Last Name" />
  ))
  .add("Email Small", () => <InputTextField type="small" name="email" placeholder="Email" />)
  .add("Password", () => <InputTextField type="default" name="password" placeholder="Password" />)
  .add("Confirm Password", () => (
    <InputTextField type="default" name="confirm password" placeholder="Confirm Password" />
  ))
  .add("Search Directory", () => (
    <InputTextField type="search" name="search directory" placeholder="Search Directory" />
  ))
  .add("Search Trips", () => (
    <InputTextField type="search" name="search trips" placeholder="Search Trips" />
  ));
