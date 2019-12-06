import React from 'react';
import "./IndividualMomBox.css";

// Function based React Component
const IndividualMomBox = (props) => {

  // Default Class to apply to Component
  let classList = `IndividualMomBox`;


  return(
    <div className={classList}>
      <p className='momName'>Mom Name</p>
      <div className="MomBoxInfo">
        <p className="location">Location</p>
        <p className="hashtags">#Hashtag</p>
      </div>
    </div>
  );
}

export default IndividualMomBox;
