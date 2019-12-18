import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// Function based React Component
const PersonCard = props => {
  return (
    <div className="PersonCard">
      <ProfilePicture type="medium" image={props.image} />
      <div className="PersonCard__name">{props.name}</div>
      <div className="PersonCard__location">{props.location}</div>
      <div className="PersonCard__interests">
        {props.interests.map(interests => (
          <Link className="PersonCard__interests-links" href={interests.url}>
            #{interests.interests}
          </Link>
        ))}
      </div>
    </div>
  )
};

export default PersonCard;
