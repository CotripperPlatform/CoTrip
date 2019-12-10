import React from "react";
import "./TripCard.css";
import Card from "../Card/Card";

// Function based React Component
const TripCard = props => {
  // Default Class to apply to Component
  return (
    <Card size="medium" picture={props.path} alt={props.location + props.date}>
      <h3 className="TripCard__location">{props.location}</h3>
      <h4 className="TripCard__date">{props.date}</h4>
    </Card>
  );
};

export default TripCard;
