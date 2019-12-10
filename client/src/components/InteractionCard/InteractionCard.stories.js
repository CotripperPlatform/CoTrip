import React from "react";
import { storiesOf } from "@storybook/react";
import InteractionCard from "./InteractionCard";
import { checkPropTypes } from "prop-types";
import Image from "../../../../assets/images/profile_large.png";
storiesOf("InteractionCard", module).add("Default", () => (
  <InteractionCard to="/route" img={Image} />
));
