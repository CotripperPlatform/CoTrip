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
      <div className="InboxUserProfilesGroup__profile-picture" key={0}>
        <ProfilePicture
          type="extra-small"
          to={props.users[0].to}
          image={props.users[0].profilePic}
        />
      </div>
      {props.users.length > 1 && (
        <div className="InboxUserProfilesGroup__profile-picture" key={1}>
          <ProfilePicture
            type="extra-small"
            to={props.users[1].to}
            image={props.users[1].profilePic}
          />
        </div>
      )}
      {props.users.length === 3 && (
        <div className="InboxUserProfilesGroup__profile-picture" key={2}>
          <ProfilePicture
            type="extra-small"
            to={props.users[2].to}
            image={props.users[2].profilePic}
          />
        </div>
      )}
      {props.users.length > 3 && (
        <div className="InboxUserProfilesGroup__extra-users" key={3}>
          <ExtraUsers to="/" users={props.users} />
        </div>
      )}
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
