import React from "react";
import "./InfoCard.css";

// Function based React Component
const Card = props => {
  let { size = "large", color, picture } = props;
  // Default Class to apply to Component
  let className = `info-card-container info-card-${color} info-card-${size}`;
  return (
    <div className={className}>
      {picture ? <img src={picture} alt="whoops"></img> : null}
      {props.children}
    </div>
  );
};

export default Card;
