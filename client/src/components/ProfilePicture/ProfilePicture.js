import React from "react";
import "./ProfilePicture.css";
import { Link } from "react-router-dom";

// Function based React Component
const ProfilePicture = props => {
  // Default Class to apply to Component
  let classList = `ProfilePicture`;
  let types = ["extra-small", "small", "medium", "large"];
  if (types.includes(props.type)) {
    classList += `profile-pic-${props.type}`;
  }

  if (this.props.link) {
    return (
      <div className={classList}>
        {/* this will be a link to the user profile page */}
        <Link exact={true} to="/">
          <img src={props.url} alt="profile-picture" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classList}>
        {/* this is the url for the user profile picture */}
        <img src={props.url} />
      </div>
    );
  }
};
export default ProfilePicture;
