import React from "react";
import { storiesOf } from "@storybook/react";
import InteractionCard from "./InteractionCard";
import { checkPropTypes } from "prop-types";

const handleClick = e => console.log("clicked");

storiesOf("InteractionCard", module).add("Default", () => (
  <InteractionCard to="/route" onClick={handleClick} />
));
