import React from 'react';
import "./personcard.css";
import mom from "../Assets/Images/Mom.png"

// Function based React Component
const PersonCard = (props) => {

  // Default Class to apply to Component
  let classList = `PersonCard`;


  return(
    <div className={classList}>
      <img src={mom} />
      <p className='momName'>{props.momName}</p>
      <div className="MomBoxInfo">
        <p className="location">{props.location}</p>
        <p className="interests">
          {props.interests}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;