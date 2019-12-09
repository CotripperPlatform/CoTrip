import React from "react";
import "./Button.css";

const Button = props => {
  Button.defaultProps = {
    color: "color",
    size: "size"
  };
  let classList = `button button-${props.color} button-${props.size}`;

  return (
    <button className={classList} onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
};

export default Button;
