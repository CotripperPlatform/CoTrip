import React from "react";
import { storiesOf } from "@storybook/react";
import InfoCard from "./InfoCard";
import image from "../../../../assets/images/card_medium1.png";

storiesOf("InfoCard", module)
  .add("Info Card, Purple", () => <InfoCard variant="purple" size="large" />)
  .add("Info Card, Purple, Small", () => <InfoCard variant="purple" size="small" />)
  .add("Info Card, Pink", () => <InfoCard variant="pink" size="large" />)
  .add("Info Card, Pink, Small", () => <InfoCard variant="pink" size="small" />)
  .add("Info Card, Picture BG", () => <InfoCard variant="picture" size="medium" picture={image} />);
