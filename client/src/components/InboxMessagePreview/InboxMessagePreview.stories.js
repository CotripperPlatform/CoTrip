import React from "react";
import { storiesOf } from "@storybook/react";
import InboxMessagePreview from "./InboxMessagePreview";

import {
  conversation1,
  conversation2,
  conversation3,
  conversation4,
  conversation5,
  conversation6
} from "./inboxMessagePreviewStoriesData";

storiesOf("Layout/Inbox/InboxMessagePreview", module)
  .add("No Props", () => <InboxMessagePreview />)
  .add("1 Person", () => <InboxMessagePreview conversation={conversation1} />)
  .add("2 People", () => <InboxMessagePreview conversation={conversation2} />)
  .add("3 People", () => <InboxMessagePreview conversation={conversation3} />)
  .add("4 People", () => <InboxMessagePreview conversation={conversation4} />)
  .add("8 People", () => <InboxMessagePreview conversation={conversation5} />)
  .add("15 People", () => <InboxMessagePreview conversation={conversation6} />);
