import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color = "purple", picture = null, discover = false } = props;
  return (
    <div
      className={`Card Card--${color} Card--${size} Card__discover-${discover}`}
      style={{ backgroundImage: `url(${picture})` }}
    >
      {props.children}
    </div>
  );
};

export default Card;
