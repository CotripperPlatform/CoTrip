import React from 'react';
import "./IndividualMomBox.css";
import mom from "../../Assets/Images/MomExample.png"

// Function based React Component
const IndividualMomBox = (props) => {

  // Default Class to apply to Component
  let classList = `IndividualMomBox`;


  return(
    <div className={classList}>
      <img src={mom} />
      <p className='momName'>{props.momName}</p>
      <div className="MomBoxInfo">
        <p className="location">{props.location}</p>
      </div>
    </div>
  );
}

export default IndividualMomBox;
