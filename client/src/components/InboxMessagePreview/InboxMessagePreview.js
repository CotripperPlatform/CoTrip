import React from "react";
import "./InboxMessagePreview.css";
import defaultPic from "assets/images/profile-picture-1.png";
import defaultPic2 from "assets/images/profile-picture-2.png";

import InboxUserProfilesGroup from "../InboxUserProfilesGroup/InboxUserProfilesGroup";

// Function based React Component
const InboxMessagePreview = props => {
  // Default Class to apply to Component
  let classList = `InboxMessagePreview`;

  // create list of names above message
  let names = props.conversation.users[0].name;
  if (props.conversation.users.length > 1) {
    names = `${names}, ${props.conversation.users[1].name}`;
  }
  if (props.conversation.users.length > 2) {
    names = `${names}, ...`;
  }

  return (
    <div className={classList}>
      <InboxUserProfilesGroup users={props.conversation.users} />
      <div className="Message__conversation">
        <div className="Message__name">{names}</div>
        <div className="Message__message">{props.conversation.thread[0].message}</div>
      </div>
    </div>
  );
};
InboxMessagePreview.defaultProps = {
  conversation: {
    thread: [
      {
        message:
          "Hey, girl! Just wanted to see if you are going on this trippppppp. Hey, girl! Just wanted to see if you are going on this trip.",
        user: "props.users[0]"
      },
      {
        message: "NO!",
        user: "props.user[1]"
      }
    ],
    users: [
      { name: "Justine", profilePic: defaultPic, to: "/" },
      { name: "Michelle", profilePic: defaultPic2, to: "/" },
      { name: "Becky", profilePic: defaultPic, to: "/" },
      { name: "Bola", profilePic: defaultPic, to: "/" }
    ]
  }
};
export default InboxMessagePreview;
