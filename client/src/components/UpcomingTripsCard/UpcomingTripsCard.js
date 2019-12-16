
import React from 'react';
import "./UpcomingTripsCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import TripCard from "../TripCard/TripCard";

const UpcomingTripsCard = (props) => {
  return(
    <Card color="pink" className="UpcomingTripsCard" size="large">
      <header className="UpcomingTripsCard__header">Upcoming Trips</header>
      <div className="UpcomingTripsCard__info">
        <TripCard src={props.src} location={props.location} date={props.date}/>
        <div className="UpcomingTripsCard__text-info">
          <p className="UpcomingTripsCard__general-information">General Information:</p>
          <ul className="UpcomingTripsCard__list">
            {props.details.map(detail => {
              return <li key={detail}>~{detail}</li>
            })}
          </ul>
        </div>
      </div>
      <Link className="UpcomingTripsCard__link" to={props.url}>More Details</Link>
    </Card>
  );
}
UpcomingTripsCard.defaultProps = {
  url:'',
  src:"https://wallpaperaccess.com/full/144067.jpg",
  location:'Stolkholm, Sweden',
  date:"April 20th, 1969",
  details:["this","is","a","list"]
}

export default UpcomingTripsCard;
