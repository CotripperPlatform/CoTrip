import React from "react";
import "./PreviousTripHashtagCard.css";

// Function based React Component
const PreviousTripHashtagCard = props => {
  // Default Class to apply to Component
  let classList = `prev-hash-card-container`;

  if (props.trips.length === 0) {
    return (
      <div className={classList}>
        <div className="trips-content-container">
          <h1>Previous Trips</h1>
          <div className="no-trips-container">
            <h2>None with CoTripper yet!</h2>
            <a href="#">Book a Trip Now!</a>
          </div>
        </div>
      </div>
    );
  } else if (props.trips.length > 0) {
    return (
      <div className={classList}>
        <div className="trips-header">hiiii</div>
      </div>
    );
  }
};

export default PreviousTripHashtagCard;
