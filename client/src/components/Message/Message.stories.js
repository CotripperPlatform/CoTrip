import React from "react";
import { storiesOf } from "@storybook/react";
import Message from "./Message";

import {
  conversation1,
  conversation2,
  conversation3,
  conversation4,
  conversation5,
  conversation6
} from "./messageStoriesData";

storiesOf("Message", module)
  .add("No Props", () => <Message />)
  .add("1 Person", () => <Message conversation={conversation1} />)
  .add("2 People", () => <Message conversation={conversation2} />)
  .add("3 People", () => <Message conversation={conversation3} />)
  .add("4 People", () => <Message conversation={conversation4} />)
  .add("8 People", () => <Message conversation={conversation5} />)
  .add("15 People", () => <Message conversation={conversation6} />);
