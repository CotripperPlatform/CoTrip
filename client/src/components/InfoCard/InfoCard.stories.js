import React from "react";
import { storiesOf } from "@storybook/react";
import InfoCard from "./InfoCard";
import image from "../../../../assets/images/card_small3.png"; //here for example

storiesOf("InfoCard", module)
  .add("Info Card, Purple", () => <InfoCard color="purple" size="large" />)
  .add("Info Card, Purple, Small", () => <InfoCard color="purple" size="small" />)
  .add("Info Card, Pink", () => <InfoCard color="pink" size="large" />)
  .add("Info Card, Pink, Small", () => <InfoCard color="pink" size="small" />)
  .add("Info Card, Blank", () => <InfoCard size="large" />)
  .add("Info Card, Blank, Small", () => <InfoCard size="small" />)
  .add("Info Card, Picture BG, Large", () => <InfoCard picture={image} size="medium" />);
