
import React from 'react';
import "./UpcomingTripsCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import TripCard from "../TripCard/TripCard";
import img from "../../assets/images/card_small2.png";

const UpcomingTripsCard = (props) => {

  let details = props.details;

  return(
    <Card color="pink" className="UpcomingTripsCard">
      <header>{props.header}</header>
      <div className="UpcomingTripsCard__info">
        <TripCard src={img} location="Puerto Rico" date="April 2019"/>
        <div className="UpcomingTripsCard__text-info">
          <p className="UpcomingTripsCard__general-information">General Information:</p>
          <ul>
            {details.map(detail => {
              return <li>~{detail}</li>
            })}
          </ul>
        </div>
      </div>
      <Link className="UpcomingTripsCard__link" to={props.url}>{props.linkText}</Link>
    </Card>
  );
}

export default UpcomingTripsCard;
