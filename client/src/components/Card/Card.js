import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color, picture = null, outline = false } = props;
  return (
    <div
      className={`Card Card--${color} Card--${size}
      ${outline ? `Card__outline` : ""}`}
      style={{ backgroundImage: `url(${picture})` }}
    >
      {" "}
      {outline ? <div className="Card__discover-link">{props.children}</div> : props.children}
    </div>
  );
};

export default Card;
