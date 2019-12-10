import React from "react";
import "./PreviousTripsCard.css";
import Card from "../Card/Card";

// Function based React Component
const PreviousTripsCard = props => {
  let { link, trips } = props;
  let [title, tripsItemOne, tripsItemTwo] = [
    props.children[0],
    props.children[1],
    props.children[2]
  ];

  return (
    <Card color="purple">
      <div className="PreviousTripCard__container">{title}</div>
      {trips ? (
        <div className="PreviousTripCard__trips">
          {tripsItemOne}
          {tripsItemTwo}
          <a href={link} className="PreviousTripCard__arrow" />
        </div>
      ) : (
        <div className="PreviousTripCard__no-trips">
          {tripsItemOne}
          {tripsItemTwo}
        </div>
      )}
    </Card>
  );
};

export default PreviousTripsCard;
