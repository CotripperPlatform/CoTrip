import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color = "purple", picture = null, outline = false } = props;
  return (
    <div
      className={`Card Card--${color} Card--${size}
      ${outline ? `Card__outline` : ""}`}
      style={{ backgroundImage: `url(${picture})` }}
    >
      {props.children}
    </div>
  );
};

export default Card;
