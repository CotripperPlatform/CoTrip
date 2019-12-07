import React from "react";
import "./ButtonSubmit.css";

// Function based React Component
const ButtonSubmit = props => {
  // Default Class to apply to Component
  let classList = "ButtonSubmit";
  let types = [
    "followed",
    "favorited",
    "next",
    "finish",
    "login",
    "joinTribe",
    "register",
    "connect",
    "message",
    "join",
    "book",
    "follow",
    "post"
  ];
  if (types.includes(props.type)) {
    classList += ` ${classList}-${props.type}`;
  }
  return <button className={classList}>{props.label && <span>{props.label} </span>}</button>;
};

export default ButtonSubmit;
