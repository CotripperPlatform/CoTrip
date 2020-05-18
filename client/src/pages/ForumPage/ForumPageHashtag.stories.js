import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPageHashtag from "./ForumPageHashtag";
import ForumPageHashtagTopic from "./ForumPageHashtagTopic";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/ForumPageHashtag", module).add("Default", () => <ForumPageHashtag background={Banner__pink} />);
storiesOf("Pages/ForumPageHashtagTopic", module).add("Default", () => <ForumPageHashtagTopic background={Banner__pink} />);
