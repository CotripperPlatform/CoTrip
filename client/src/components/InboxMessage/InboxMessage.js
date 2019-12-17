import React from "react";
import "./InboxMessage.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// Function based React Component
const InboxMessage = props => {
  // Default Class to apply to Component
  let classList = `InboxMessage`;

  return (
    <div className={classList}>
      <div className="InboxMessage__message-container">
        <ProfilePicture type="extra-small" to="#" image={props.profilePic} />
        <div className="InboxMessage__conversation">
          <div className="InboxMessage__name">{props.name}</div>
          <div className="InboxMessage__message">{props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default InboxMessage;
