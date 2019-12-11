
import React from 'react';
import "./UpcomingTripsCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const UpcomingTripsCard = (props) => {

  let details = props.details;

  return(
    <Card color="pink" className="UpcomingTripsCard">
      <header>{props.header}</header>
      <div className="UpcomingTripsCard__info">
        {/* placeholder: */}
        <Card size="small" className="UpcomingTripsCard__trip-card" />
        {/* <div className="InfoCard"></div> */}
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
