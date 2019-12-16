import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

// Function based React Component
const PersonCard = props => {
  return(
    <div className="PersonCard">
      <div className="image">
      <ProfilePicture type="medium" link={props.to} image={props.image} />
      </div>
      <div className="name">{props.name}</div>
        <div className="location">{props.location}</div>
        <div className="interests">
          {props.interests.map(interests => (
              <Link className="interests-links" href={interests.url}>
                #{interests.interests}
              </Link>
            ))}
      </div>
    </div>
  )};

export default PersonCard;
