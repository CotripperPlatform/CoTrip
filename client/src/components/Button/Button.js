import React from "react";
import "./Button.css";

const Button = props => {
  let classList = `Button Button__${props.color} Button--${props.size} Button__${props.textColor}-text`;
  return (
    <button className={classList} onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "color",
  size: "size",
  textColor: "textColor"
};
export default Button;
