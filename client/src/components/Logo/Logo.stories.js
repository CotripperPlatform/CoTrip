import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Layout/Logo"
};

storiesOf("Layout/Logo", module)
  .add("Default", () => <Logo />)
  .add("Small", () => <Logo small />)
  .add("Large", () => <Logo large />)
  .add("Clickable Default Route Small", () => <Logo small clickable />)
  .add("Clickable Route as Prop", () => <Logo clickable to="/route" />);
