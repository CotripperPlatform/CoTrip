import React from "react";
import "./InboxMessage.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import defaultPic from "assets/images/profile_large.png";
import ExtraUsers from '../ExtraUsers/ExtraUsers'

// Function based React Component
const InboxMessage = props => {
  // Default Class to apply to Component
  let classList = `InboxMessage`;
  if( props.profilePics.length > 3){
    
  }

  return (
    <div className={classList}>
      <div className="InboxMessage__message-container">
        <ProfilePicture type="extra-small" to={props.to} image={props.profilePic} />
        <div className="InboxMessage__conversation">
          <div className="InboxMessage__name">{props.name}</div>
          <div className="InboxMessage__message">{props.message}</div>
        </div>
      </div>
    </div>
  );
};
InboxMessage.defaultProps = {
  to: "/",
  profilePics:[],
  name: "Justine Good",
  message: "Hey, girl! Just wanted to see if you are going on this trip."
};
export default InboxMessage;
