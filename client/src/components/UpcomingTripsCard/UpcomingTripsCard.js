
import React from 'react';
import "./UpcomingTripsCard.css";
//import location/trip card

// Function based React Component
const UpcomingTripsCard = (props) => {

  // Default Class to apply to Component
  let classList = `UpcomingTripsCard`;

  return(
    <div className={classList}>
      <header>{props.header}</header>
      <div className="info">
        {/* placeholder: */}
        <div className="InfoCard"></div>
        <div className="text-info">
          <p className="general-information">General Information:</p>
          <ul>
            {/* map through the details array above */}
            <li>~{props.details[0]}</li>
            <li>~{props.details[1]}</li>
            <li>~{props.details[2]}</li>
            <li>~{props.details[3]}</li>
          </ul>
        </div>
      </div>
      <a href={props.url} className="link">{props.linkText}</a>
    </div>
  );
}

export default UpcomingTripsCard;
