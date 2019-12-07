import React from "react";
import "./ButtonSubmit.css";

// Function based React Component
const ButtonSubmit = props => {
  // Default Class to apply to Component
  let classList = "";
  let types = ["followed", "favorited", "next", "register"];
  if (types.includes(props.type)) {
    classList += ` ButtonSubmit-${props.type}`;
  }
  return (
    <button className={classList} onClick={props.onClick}>
      {props.label && <span>{props.label}</span>}
    </button>
  );
};

export default ButtonSubmit;
