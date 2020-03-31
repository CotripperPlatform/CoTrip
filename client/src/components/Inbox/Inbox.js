import React from "react";
import "./Inbox.css";

// Function based React Component
const Inbox = props => {
  // Default Class to apply to Component
  let classList = `Inbox`;

  let messagePreviews = <div>Message!</div>;

  return (
    <div className={classList}>
      <div className={classList + "__header"}>
        <div className={classList + "__header-text"}>Inbox</div>
        <div className={classList + "__header-icon"}>(icon)</div>
      </div>
      <div className={classList + "__message-previews"}>{messagePreviews}</div>
    </div>
  );
};

export default Inbox;
