import React from 'react';
import "./IndividualMomBox.css";

// Function based React Component
const IndividualMomBox = (props) => {

  // Default Class to apply to Component
  let classList = `IndividualMomBox`;


  return(
    <div className={classList}>
      <p className='momName'>{props.momName}</p>
      <div className="MomBoxInfo">
        <p className="location">{props.location}</p>
        <p className="hashtags">{props.hashtags}</p>
      </div>
    </div>
  );
}

export default IndividualMomBox;
