import React from "react";
import "./WelcomeHeader.css";
import "../../App.css";

// Created by Tyler. Not sure what font we're going with yet so feel free to adjust that and play around with the font size.
const WelcomeHeader = props => {
  // Default Class to apply to Component
  let classList = `welcome-header`;
  if (props.type === "community") {
    classList = "welcome-header community";
  }

  return <div className={classList}>Welcome, {props.name}!</div>;
};

export default WelcomeHeader;
