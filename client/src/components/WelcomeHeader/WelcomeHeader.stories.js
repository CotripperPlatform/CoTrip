import React from "react";
import { storiesOf } from "@storybook/react";
import WelcomeHeader from "./WelcomeHeader";

storiesOf("WelcomeHeader", module)
  .add("Welcome Header", () => <WelcomeHeader name="Tyler" />)
  .add("Welcome Example", () => <WelcomeHeader name="Example" />);
