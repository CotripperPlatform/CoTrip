import React from "react";
import "./Button.css";

const Button = props => {
  let classList = `Button Button--${props.color} Button--${props.size} Button--${props.textColor}-text Button--${props.type}`;

  return (
    <button className={classList} onClick={() => props.handleClick()}>
      {props.icon ? <img src={props.icon} alt={props.text} /> : null}
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "color",
  size: "size",
  textColor: "textColor",
  type: "none"
};
export default Button;
