import React from "react";
import { storiesOf } from "@storybook/react";
import NavLink from "./NavLink";

const placeholderTextProp = "community";
const placeholderUrl = "/";
const placeholderDropdownProp = [
  {
    text: "Explore People",
    to: "/"
  },
  {
    text: "Join Groups",
    to: "/"
  }
];

export default {
  title: "Layout/NavLink"
};

storiesOf("Layout/NavLink", module)
  .add("NavLink", () => (
    <NavLink text={placeholderTextProp} to={placeholderUrl} menuList={placeholderDropdownProp} />
  ))
  .add("NavLink w/o Menu", () => (
    <NavLink text={placeholderTextProp} to={placeholderUrl} menuList={[]} />
  ));
