
import React from 'react';
import "./UpcomingTripsCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import TripCard from "../TripCard/TripCard";

const UpcomingTripsCard = (props) => {
  return(
    <Card color="pink" className="UpcomingTripsCard">
      <header className="UpcomingTripsCard__header">Upcoming Trips</header>
      <div className="UpcomingTripsCard__info">
        <TripCard src={props.src} location={props.location} date={props.date}/>
        <div className="UpcomingTripsCard__text-info">
          <p className="UpcomingTripsCard__general-information">General Information:</p>
          <ul className="UpcomingTripsCard__list">
            {props.details.map(detail => {
              return <li>~{detail}</li>
            })}
          </ul>
        </div>
      </div>
      <Link className="UpcomingTripsCard__link" to={props.url}>More Details</Link>
    </Card>
  );
}

export default UpcomingTripsCard;