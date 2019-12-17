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
          <span className="PreviousTripCard__trip-two">{tripsItemTwo}</span>
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
PreviousTripsCard.defaultProps = {
  trips:false,
  link:"/",
  children: [
    <h1>Previous Trips</h1>,
    <h2>None with CoTripper yet!</h2>,
    <a href="/">Book a Trip Now!</a>
  ]
}
export default PreviousTripsCard;
