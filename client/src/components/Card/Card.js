import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color, picture, discover } = props;
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
