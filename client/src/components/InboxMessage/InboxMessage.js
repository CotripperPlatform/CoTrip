import React from "react";
import "./InboxMessage.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import defaultPic from "assets/images/profile-picture-1.png";
import defaultPic2 from "assets/images/profile-picture-2.png";
import ExtraUsers from "../ExtraUsers/ExtraUsers";

// Function based React Component
const InboxMessage = props => {
  // Default Class to apply to Component
  let classList = `InboxMessage`;
  let profilePics = props.conversation.users.map((user, i) => {
    if (i < 3) {
      if (props.conversation.users.length >= 4 && i === 2) {
        return <div className="InboxMessage__child"><ExtraUsers to="/" users={props.conversation.users} key={i} /></div>;
      }
      return <div className="InboxMessage__child"><ProfilePicture type="extra-small" to={user.to} image={user.profilePic} key={i} /></div>;
    }
  });
  let names = props.conversation.users.map((user, i) => {
    if (i === 2 && props.conversation.users.length > 3) {
      return "...";
    } else if (i === props.conversation.users.length - 1) {
      return `${user.name}`;
    } else if (i < 2) {
      return `${user.name}, `;
    }
  });
  return (
    <div className={classList}>
      <div className="InboxMessage__message-container">
        <div className="InboxMessage__profilePics">{profilePics}</div>
        <div className="InboxMessage__conversation">
          <div className="InboxMessage__name">{names}</div>
          <div className="InboxMessage__message">{props.conversation.thread[0].message}</div>
        </div>
      </div>
    </div>
  );
};
InboxMessage.defaultProps = {
  conversation: {
    thread: [
      {
        message: "Hey, girl! Just wanted to see if you are going on this trip.",
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
export default InboxMessage;
