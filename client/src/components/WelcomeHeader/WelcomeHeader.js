import React from "react";
import "./WelcomeHeader.css";

// Function based React Component
const WelcomeHeader = props => {
  // Default Class to apply to Component
  let classList = `welcome-header`;

  return <div className={classList}>WelcomeHeader</div>;
};

export default WelcomeHeader;
