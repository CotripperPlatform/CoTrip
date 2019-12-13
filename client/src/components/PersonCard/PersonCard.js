import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonCard.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

// Function based React Component
const PersonCard = props => {
  return(
    <div className="PersonCard">
      <div className="PersonCard__image">
      <ProfilePicture type="medium" link={props.to} image={props.image} />
      </div>
      <div className="PersonCard__name">{props.PersonCard__name}</div>
        <div className="PersonCard__location">{props.PersonCard__location}</div>
        <div className="PersonCard__interests">
          {props.PersonCard__interests.map(PersonCard__interests => (
              <Link className="PersonCard__interests-links" href={PersonCard__interests.url}>
                #{PersonCard__interests.interests}
              </Link>
            ))}
      </div>
    </div>
  )};

export default PersonCard;
