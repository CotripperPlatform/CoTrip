import React from "react";
import { storiesOf } from "@storybook/react";
import CommunityPage from "./CommunityPage";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/CommunityPage", module).add("Default", () => (
  <CommunityPage background={Banner__pink} />
));
