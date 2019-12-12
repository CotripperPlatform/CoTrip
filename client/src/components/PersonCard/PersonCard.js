import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonCard.css";
import mom from "../Assets/Images/Mom.png"

// Function based React Component
const PersonCard = props => {
  return(
    <div className="PersonCard">
      <img className="PersonCard__image" img src={mom} />
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
