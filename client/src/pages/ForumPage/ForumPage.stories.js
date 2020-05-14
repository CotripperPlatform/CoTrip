import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPage from "./ForumPage";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/ForumPage", module).add("Default", () => <ForumPage background={Banner__pink} />);
