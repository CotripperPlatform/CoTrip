import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";

storiesOf("Logo", module)
  .add("Default", () => <Logo />)
  .add("Small", () => <Logo small />)
  .add("Clickable Small", () => <Logo small clickable />);
