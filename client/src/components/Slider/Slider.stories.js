import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "./Slider";
import Person from "../PersonCard/PersonCard";

storiesOf("Atoms/Slider", module).add("Default", () => (
  <Slider>
    <Person />
    <Person />
    <Person />
    <Person />
  </Slider>
));
