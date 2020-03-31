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

export default {
  title: "Atoms/Nav/NavLinkDropdownMenu"
};

storiesOf("Atoms/Nav/NavLinkDropdownMenu", module).add("NavLinkDropdownMenu", () => (
  <NavLinkDropdownMenu menuList={placeholderDropdownProp} />
));
