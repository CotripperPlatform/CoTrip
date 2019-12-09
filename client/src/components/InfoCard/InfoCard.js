import React from "react";
import "./InfoCard.css";

// Function based React Component
const InfoCard = props => {
  // Default Class to apply to Component
  let className = `info-card-container ${props.variant} ${props.size}`;
  return (
    <div className={className}>
      {props.picture ? <img src={props.picture} alt="whoops"></img> : null}
      {props.children}
    </div>
  );
};

export default InfoCard;
