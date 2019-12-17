import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";

storiesOf("Logo", module)
  .add("Default", () => <Logo />)
  .add("Small", () => <Logo small />)
  .add("Clickable Default Route Small", () => <Logo small clickable />)
  .add("Large", () => <Logo large />)
  .add("Clickable Route as Prop", () => <Logo clickable to="/route" />);
