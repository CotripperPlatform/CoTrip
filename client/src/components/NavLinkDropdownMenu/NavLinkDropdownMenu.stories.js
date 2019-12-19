import React from "react";
import { storiesOf } from "@storybook/react";
import NavLinkDropdownMenu from "./NavLinkDropdownMenu";

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

storiesOf("NavLinkDropdownMenu", module).add("NavLinkDropdownMenu", () => (
  <NavLinkDropdownMenu menuList={placeholderDropdownProp} />
));
