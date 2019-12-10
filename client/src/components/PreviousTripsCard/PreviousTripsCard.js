import React from "react";
import "./PreviousTripsCard.css";
import Card from "../Card/Card";

// Function based React Component
const PreviousTripsCard = props => {
  let { link } = props;
  console.log(link);

  return (
    <Card color="purple">
      <div className="PreviousTripCard_container">{props.children[0]}</div>
      <div className="PreviousTripCard_trips">
        {props.children[1]}
        {props.children[2]}
      </div>

      <a href={link} className="PreviousTripCard_arrow" />
    </Card>
  );
};

export default PreviousTripsCard;
