import React from "react";
import "./Button.css";

// Function based React Component
const Button = props => {
  // Default Class to apply to Component

  let classList = `Button`;
  if (props.color && props.size) {
    classList = `Button btn-${props.color} btn-${props.size}`;
  } else if (props.color) {
    classList = `Button btn-${props.color}`;
  } else if (props.size) {
    classList = `Button btn-${props.size}`;
  }
  return (
    <button className={classList} onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
};

export default Button;
