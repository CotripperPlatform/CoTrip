import React from "react";
import "./ProfilePicture.css";
import { Link } from "react-router-dom";

// Function based React Component
const ProfilePicture = props => {
  // Default Class to apply to Component
  let classList = `ProfilePicture ProfilePicture--${props.type}`;

  return (
    <div className={classList}>
      {/* this will be a link to the user profile page */}

      {props.to ? (
        <Link to={props.to}>
          <img src={props.image} alt="profile-picture" />
        </Link>
      ) : (
        <img src={props.image} alt="profile-picture" />
      )}
    </div>
  );
};

ProfilePicture.defaultProps = {
  type: "medium"
};

export default ProfilePicture;
