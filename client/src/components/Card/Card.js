import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color = "", picture = null, outline = false } = props;
  console.log(props);
  return (
    <div
      className={`Card Card--${color} Card--${size}
      ${outline ? `Card__outline` : ""}`}
    >
      {picture ? <img src={picture} alt="whoops" /> : null} {props.children}{" "}
      {outline ? (
        <div className="Card__discover-link">{props.children}</div>
      ) : (
        <div className="Card__contents-container"> </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  color: "purple",
  size: "large",
  picture: null,
  outline: null
};
export default Card;
