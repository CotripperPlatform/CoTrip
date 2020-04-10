import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PersonCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import image from "../../assets/images/profile-picture-1.png";
import { render } from "enzyme";

// Function based React Component
const PersonCard = (props) => {
  if (status) {
    return props.online && (
    <div className="PersonCard">
      <ProfilePicture type="medium" image={props.image} />
      <div className="PersonCard__name">{props.name}</div>
      <div className="PersonCard__location">{props.location}</div>
      <div className="PersonCard__interests">
        {props.interests.map((interests, i) => (
          <Link className="PersonCard__interests-links" to={interests.url} key={i}>
            #{interests.interests}
          </Link>
        ))}
        {/* { props.online || null} */}
      </div>
    </div>
  );
};
PersonCard.defaultProps = {
  online: <div className="PersonCard__dot"></div>,
  image: { image },
  name: "Lindsay L.",
  location: "Washington D.C.",
  interests: [
    { url: "#", interests: "veganism" },
    { url: "#", interests: "budgeting" },
    { url: "#", interests: "travel" },
    { url: "#", interests: "outdoors" },
  ],
};

const status = false;
// ReactDOM.render(<PersonCard loggedIn />,
//   document.getElementById('root'))
export default PersonCard;
