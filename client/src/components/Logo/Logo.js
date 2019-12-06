import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

// Function based React Component
const Logo = props => {
  // Default Class to apply to Component
  let classList = `Logo`;
  if (props.small) {
    classList += ` smallLogo`;
  }
  if (props.clickable) {
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
