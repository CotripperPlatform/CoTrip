import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

// Function based React Component
const Logo = props => {
  // Default Class to apply to Component
  let classList = `Logo`;
  if (props.small) {
    classList += ` Logo--small`;
  } else if (props.large) {
    classList += ` Logo--large`;
  }
  if (props.clickable && props.to) {
    return (
      <Link to={props.to}>
        <div className={classList}></div>
      </Link>
    );
  } else if (props.clickable) {
    return (
      <Link to="/">
        <div className={classList}></div>
      </Link>
    );
  } else {
    return <div className={classList}></div>;
  }
};

export default Logo;
