import React from "react";
import { storiesOf } from "@storybook/react";
import InteractionCard from "./InteractionCard";
import { checkPropTypes } from "prop-types";

storiesOf("InteractionCard", module).add("Default", () => (
  <InteractionCard to="/route" img="https://www.placecage.com/c/300/300" />
));
