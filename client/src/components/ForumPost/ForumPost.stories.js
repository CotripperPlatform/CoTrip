import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPost from "./ForumPost";

storiesOf("ForumPost", module).add("Default", () => <ForumPost likes="8" comments="9" />);
