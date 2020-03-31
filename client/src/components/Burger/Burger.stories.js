import React from "react";
import { storiesOf } from "@storybook/react";
import Burger from "./Burger";

function handleClick() {
  console.log("clicked");
}

export default {
  title: "Atoms/Burger"
};

storiesOf("Atoms/Burger", module).add("Burger Style 1", () => (
  <Burger onClick={handleClick} active={false} />
));
