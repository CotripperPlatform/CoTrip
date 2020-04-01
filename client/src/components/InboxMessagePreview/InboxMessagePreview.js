import React from "react";
import "./InboxMessagePreview.css";
import defaultPic from "assets/images/profile-picture-1.png";
import defaultPic2 from "assets/images/profile-picture-2.png";

import ProfilePictureGroup from "../ProfilePictureGroup/ProfilePictureGroup";

// Function based React Component
const InboxMessagePreview = props => {
  // Default Class to apply to Component
  let classList = `InboxMessagePreview`;

  // create list of names above message
  let names = props.conversation.users.map(user => {
    return user.name;
  });
  let nameString = names.join(", ");

  return (
    <div className={classList}>
      <ProfilePictureGroup users={props.conversation.users} />
      <div className={classList + "__conversation"}>
        <div className={classList + "__name"}>{nameString}</div>
        <div className={classList + "__message"}>{props.conversation.thread[0].message}</div>
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
