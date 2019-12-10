import React from "react";
import "./PreviousTripsCard.css";
import Card from "../Card/Card";

// Function based React Component
const PreviousTripsCard = props => {
  // Default Class to apply to Component

  return (
    <Card color="purple">
      <div className="PreviousTripCard_container">{props.children}</div>
    </Card>
  );
};

export default PreviousTripsCard;
