import React from "react";
import "./InfoCard.css";

// Function based React Component
const InfoCard = props => {
  // Default Class to apply to Component
  return <div className="info-card-container">{props.children}</div>;
};

export default InfoCard;
