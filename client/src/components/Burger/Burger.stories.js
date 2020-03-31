import React from "react";
import { storiesOf } from "@storybook/react";
import Burger from "./Burger";

function handleClick() {
  console.log("clicked");
}

storiesOf("Atoms/Burger", module)
  .add("Default - inactive", () => <Burger onClick={handleClick} active={false} />)
  .add("Default - active", () => <Burger onClick={handleClick} active={true} />);
