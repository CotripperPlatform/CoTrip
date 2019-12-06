import React from "react";
import "./Pill.css";

// Function based React Component
const Pill = props => {
  // Default Class to apply to Component
  let classList = `PillContainer`;

  return (
    <div className={classList}>
      <h1 className="pillContainer">Topic</h1>
    </div>
  );
};

export default Pill;
