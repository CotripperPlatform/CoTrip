import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PersonCard.css";
import PersonCardOnlineGreenDot from "../PersonCardOnlineGreenDot/PersonCardOnlineGreenDot";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import image from "../../assets/images/profile-picture-1.png";
// import { render } from "enzyme";

// Function based React Component
const PersonCard = (props) => {
  
  // (online) ?  props.status && <PersonCard/> : <PersonCard/>
  //   if (online) {
  //   return props.status;
  // }
  return (
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
      </div>
    </div>
  );
};
PersonCard.defaultProps = {
  status: <div className="PersonCard__dot"></div>,
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
console.log(<PersonCard/>);
const online = true;
// ReactDOM.render(<PersonCard loggedIn />,
//   document.getElementById('root'))
export default PersonCard;
