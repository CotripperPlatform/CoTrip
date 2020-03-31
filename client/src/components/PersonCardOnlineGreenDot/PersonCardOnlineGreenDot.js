import React from 'react';
import { Link } from "react-router-dom";
import "./PersonCardOnlineGreenDot.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import image from "../../assets/images/profile-picture-1.png";

// Function based React Component
const PersonCardOnlineGreenDot = props => {

  return(
    <div className="PersonCardOnlineGreenDot">
      <ProfilePicture type="medium" image={props.image} />
      <div className="PersonCardOnlineGreenDot__dot"></div>
      <div className="PersonCardOnlineGreenDot__name">{props.name}</div>
      <div className="PersonCardOnlineGreenDot__location">{props.location}</div>
      <div className="PersonCardOnlineGreenDot__interests">
        {props.interests.map((interests, i) => (
          <Link className="PersonCardOnlineGreenDot__interests-links" to={interests.url} key={i}>
            #{interests.interests}
          </Link>
        ))}
      </div>
    </div>
  );
};
PersonCardOnlineGreenDot.defaultProps = {
  image: { image },
  name: "Lindsay L.",
  location: "Washington D.C.",
  interests: [
    { url: "#", interests: "veganism" },
    { url: "#", interests: "budgeting" },
    { url: "#", interests: "travel" },
    { url: "#", interests: "outdoors" },
  ]
};

export default PersonCardOnlineGreenDot;
