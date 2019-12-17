import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

// Function based React Component
const Logo = props => {
  // Default Class to apply to Component
  let classList = `Logo`;
  if (props.small) {
    classList += ` Logo--small`;
  } 
  if (props.clickable && props.to) {
    return (
      <div className={classList}>
        <Link to={props.to} />
      </div>
    );
  } else if (props.clickable) {
    return (
      <div className={classList}>
        <Link to="/" />
      </div>
    );
  } else {
    return <div className={classList}></div>;
  }
};

export default Logo;
