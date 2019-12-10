import React from "react";
import "./InfoCard.css";

const Card = props => {
  let { size = "large", color, picture } = props;
  return (
    <div className={`info-card-container info-card-${color} info-card-${size}`}>
      {picture ? <img src={picture} alt="whoops"></img> : null}
      {props.children}
    </div>
  );
};

export default Card;
