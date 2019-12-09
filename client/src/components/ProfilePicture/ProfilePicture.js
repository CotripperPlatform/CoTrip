import React from "react";
import "./ProfilePicture.css";
import { Link } from "react-router-dom";

// Function based React Component
const ProfilePicture = props => {
  console.log(props);
  // Default Class to apply to Component
  let classList = `ProfilePicture`;
  let types = ["extra-small", "small", "medium", "large"];
  if (types.includes(props.type)) {
    classList += ` profile-pic-${props.type}`;
  }

  if (props.link) {
    return (
      <div className={classList}>
        {/* this will be a link to the user profile page */}
        <Link exact={true} to={props.link}>
          <img className="profile-picture-img" src={props.image} alt="profile-picture" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classList}>
        {/* this is the url for the user profile picture */}
        <img className="profile-picture-img" src={props.image} />
      </div>
    );
  }
};
export default ProfilePicture;
