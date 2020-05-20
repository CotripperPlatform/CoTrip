import React from "react";
import "./TripCard-Users.css";
import Card from "../Card/Card";

// Function based React Component
const TripCardUsers = props => {
  // Default Class to apply to Component
  return (
    <Card size="medium-small-user" picture={props.src} alt={props.location + props.date}>
      <div className="TripCard-Users">
        <h3 className="TripCard-Users__location">{props.location}</h3>
        <h4 className="TripCard-Users__date">{props.date}</h4>
      </div>
    </Card>
  );
};

export default TripCardUsers;
