import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color, picture, alt } = props;
  return (
    <div className={`info-card-container info-card-${color} info-card-${size}`}>
      {picture ? <img src={picture} alt={alt}></img> : null}
      {props.children}
    </div>
  );
};

export default Card;
