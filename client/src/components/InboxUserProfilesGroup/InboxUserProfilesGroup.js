import React from "react";
import "./InboxUserProfilesGroup.css";
import ExtraUsers from "../ExtraUsers/ExtraUsers";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import defaultPic from "assets/images/profile-picture-1.png";
import defaultPic2 from "assets/images/profile-picture-2.png";

// Function based React Component
const InboxUserProfilesGroup = props => {
  // Default Class to apply to Component
  let classList = `InboxUserProfilesGroup`;

  return (
    <div className={classList}>
      {props.users.slice(0, 3).map((user, i) => {
        if (props.users.length < 4 || i < 2) {
          return (
            <div className="InboxUserProfilesGroup__profile-picture" key={i}>
              <ProfilePicture type="extra-small" to={user.to} image={user.profilePic} />
            </div>
          );
        } else {
          return (
            <div className="InboxUserProfilesGroup__extra-users" key={3}>
              <ExtraUsers to="/" users={props.users} />
            </div>
          );
        }
      })}
    </div>
  );
};
InboxUserProfilesGroup.defaultProps = {
  users: [
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic2, to: "/" },
    { name: "Becky", profilePic: defaultPic, to: "/" },
    { name: "Bola", profilePic: defaultPic, to: "/" }
  ]
};
export default InboxUserProfilesGroup;
