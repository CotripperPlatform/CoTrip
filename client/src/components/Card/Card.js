import React from "react";
import "./Card.css";

const Card = props => {
  let { size = "large", color = "purple", picture = null, outline = false } = props;
  console.log(props);
  return (
    <div
      className={`Card Card--${color} Card--${size}
      ${outline ? `Card__outline` : ""}`}
    >
      {" "}
      {outline ? (
        <div style={{ backgroundImage: `url(${picture})` }} className="Card__discover-link">
          {props.children}
        </div>
      ) : (
        <div className="Card__contents-container">
          {" "}
          {picture ? <img src={picture} alt="whoops" /> : null} {props.children}
        </div>
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
