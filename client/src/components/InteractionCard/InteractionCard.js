import React from "react";
import "./InteractionCard.css";

// Function based React Component
const InteractionCard = props => {
  // Default Class to apply to Component
  let classList = `InteractionCard`;

  return (
    <div className={classList}>
      <img src={"https://www.placecage.com/gif/200/300"}></img>
      <button></button>
      <button></button>
    </div>
  );
};

export default InteractionCard;
