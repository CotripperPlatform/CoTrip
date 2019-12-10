import React from 'react';
import "./UpcomingEventsCard.css";
// import { prependOnceListener } from 'cluster';

const UpcomingEventsCard = (props) => {

  return(
    <div className="UpcomingEventsCard">
      <span className="UpcomingEventsCard__name">{props.name}</span>
      <span className="UpcomingEventsCard__date">Date: {props.date}</span>
      <span className="UpcomingEventsCard__time">Time: {props.time}</span>
      <span className="UpcomingEventsCard__location">Location: {props.location}</span>
    </div>
  );
}

export default UpcomingEventsCard;
