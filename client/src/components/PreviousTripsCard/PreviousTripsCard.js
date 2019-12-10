import React from "react";
import "./PreviousTripsCard.css";
import Card from "../Card/Card";

// Function based React Component
const PreviousTripsCard = props => {
  let { link, trips } = props;

  return (
    <Card color="purple">
      <div className="PreviousTripCard_container">{props.children[0]}</div>
      {trips ? (
        <div className="PreviousTripCard_trips">
          {props.children[1]}
          {props.children[2]}
          <a href={link} className="PreviousTripCard_arrow" />
        </div>
      ) : (
        <div className="PreviousTripCard_no-trips">
          {props.children[1]}
          {props.children[2]}
        </div>
      )}
    </Card>
  );
};

export default PreviousTripsCard;
