import React from "react";
import { storiesOf } from "@storybook/react";
import InputTextField from "./InputTextField";

storiesOf("InputTextField", module)
  .add("Email", () => <InputTextField type="text" name="email" placeholder="Email" />)
  .add("Name", () => <InputTextField type="text" name="name" placeholder="Name" />)
  .add("City", () => <InputTextField type="text" name="city" placeholder="City of Residence" />)
  .add("Age", () => <InputTextField type="text" name="age" placeholder="What is your age?" />)
  .add("Dream", () => (
    <InputTextField type="text" name="dream" placeholder="What is your dream destination(s)?" />
  ))
  .add("First Name, Small", () => (
    <InputTextField type="text" variation="small" name="first name" placeholder="First Name" />
  ))
  .add("Last Name, Small", () => (
    <InputTextField type="text" variation="small" name="last name" placeholder="Last Name" />
  ))
  .add("Email Small", () => (
    <InputTextField type="text" variation="small" name="email" placeholder="Email" />
  ))
  .add("Password", () => <InputTextField type="password" name="password" placeholder="Password" />)
  .add("Confirm Password", () => (
    <InputTextField type="password" name="confirm password" placeholder="Confirm Password" />
  ))
  .add("Search Directory", () => (
    <InputTextField
      type="text"
      variation="search"
      name="search directory"
      placeholder="Search Directory"
    />
  ))
  .add("Search Trips", () => (
    <InputTextField type="text" variation="search" name="search trips" placeholder="Search Trips" />
  ))
  .add("Search Trips, Many", () => (
    <div>
      <InputTextField
        type="text"
        variation="search"
        name="search trips"
        placeholder="Search Trips"
      />
      <InputTextField
        type="text"
        variation="search"
        name="search trips"
        placeholder="Search Trips"
      />
      <InputTextField
        type="text"
        variation="search"
        name="search trips"
        placeholder="Search Trips"
      />
    </div>
  ));
