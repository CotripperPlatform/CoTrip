import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color="purple", picture = null, outline = false } = props;
  return (
    <div
      className={`Card Card--${color} Card--${size}
      ${outline ? `Card__outline` : ""}`}
      style={{ backgroundImage: `url(${picture})` }}
    >
      {" "}
      {outline ? (
        <div style={{ backgroundImage: `url(${picture})` }} className="Card__discover-link">
          {props.children}
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

Card.defaultProps = {
  color:"purple",
  size:"large",
  picture: null,
  outline: null
}
export default Card;
