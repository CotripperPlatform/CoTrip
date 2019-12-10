import React from 'react';
import "./personcard.css";
import mom from "../Assets/Images/Mom.png"

// Function based React Component
const PersonCard = (props) => {

  // Default Class to apply to Component
  let classList = `PersonCard`;


  return(
    <div className={classList}>
      <img className="PersonCard__Img" img src={mom} />
      <p className="PersonCard__MomName">{props.PersonCard__MomName}</p>
      <div className="PersonCard__MomBoxInfo">
        <p className="PersonCard__Location">{props.PersonCard__Location}</p>
        <p className="PersonCard__Interests">
          {props.PersonCard__Interests}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;