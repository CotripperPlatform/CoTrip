import React from "react";
import { storiesOf } from "@storybook/react";
import "./Header.css";
import Header from "./Header";

storiesOf("Header", module)
  .add("Default", () => <Header />)
  .add("Home", () => <Header home name="Justine" />)
  .add("Passport Purple", () => <Header passport purple name="Justine" />)
  .add("Passport Pink", () => <Header passport pink name="Justine" />);
