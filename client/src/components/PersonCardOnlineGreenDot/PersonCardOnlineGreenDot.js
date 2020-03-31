
import React from 'react';
import "./PersonCardOnlineGreenDot.css";

// Function based React Component
const PersonCardOnlineGreenDot = props => {

  // Default Class to apply to Component
  let classList = `PersonCardOnlineGreenDot`;


  return(
    <div className={classList}>
      <circle></circle>
    </div>
  );
}

export default PersonCardOnlineGreenDot;
