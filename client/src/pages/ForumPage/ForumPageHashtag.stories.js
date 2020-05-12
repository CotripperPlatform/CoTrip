import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPageHashtag from "./ForumPageHashtag";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/ForumPageHashtag", module).add("Default", () => <ForumPageHashtag background={Banner__pink} />);
