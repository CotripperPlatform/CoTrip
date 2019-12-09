import React from "react";
import "./BannerParent.css";

// Function based React Component
const BannerParent = props => {
  // Default Class to apply to Component
  let classList = `BannerParent`;

  return <div className={classList}>{props.children}</div>;
};

export default BannerParent;
