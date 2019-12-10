import React from "react";
import "./ProfilePicture.css";
import { Link } from "react-router-dom";

// Function based React Component
const ProfilePicture = props => {
  // Default Class to apply to Component
  let classList = "ProfilePicture";
  let types = ["extra-small", "small", "medium", "large"];
  if (types.includes(props.type)) {
    classList += `--${props.type}`;
  }

  return (
    <div className={classList}>
      {/* this will be a link to the user profile page */}

      {props.link ? (
        <Link exact={true} to={props.to}>
          <img src={props.image} alt="profile-picture" />
        </Link>
      ) : (
        <img src={props.image} alt="profile-picture" />
      )}
    </div>
  );
};

export default ProfilePicture;
