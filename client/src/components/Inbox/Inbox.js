import React from "react";
import "./Inbox.css";

import {
  conversation1,
  conversation2,
  conversation3,
  conversation4,
  conversation5,
  conversation6
} from "../InboxMessagePreview/inboxMessagePreviewStoriesData";

import InboxMessagePreview from "../InboxMessagePreview/InboxMessagePreview";
import Icon from "../Icon/Icon";

// Function based React Component
const Inbox = props => {
  // Default Class to apply to Component
  let classList = `Inbox`;

  let messagePreviews = props.conversations.map((conversation, i) => {
    return <InboxMessagePreview conversation={conversation} key={i} />;
  });

  return (
    <div className={classList}>
      <div className={classList + "__header"}>
        <div className={classList + "__header-text"}>Inbox</div>
        <div className={classList + "__header-icon"}>
          <Icon icon={"edit"} />
        </div>
      </div>
      <div className={classList + "__message-previews"}>{messagePreviews}</div>
    </div>
  );
};

export default Inbox;

Inbox.defaultProps = {
  conversations: [
    conversation1,
    conversation2,
    conversation3,
    conversation4,
    conversation5,
    conversation6
  ]
};
