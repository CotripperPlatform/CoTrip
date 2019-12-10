import React from 'react';
import "./personcard.css";
import mom from "../Assets/Images/Mom.png"

// Function based React Component
const PersonCard = (props) => {

  // Default Class to apply to Component
  let classList = `PersonCard`;


  return(
    <div className={classList}>
      <img className="PersonCard__image" img src={mom} />
      <p className="PersonCard__name">{props.PersonCard__name}</p>
      <div className="PersonCard__MomBoxInfo">
        <p className="PersonCard__location">{props.PersonCard__location}</p>
        <p className="PersonCard__interests">
          {props.PersonCard__interests}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;