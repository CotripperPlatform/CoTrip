
import React from 'react';
import "./UpcomingTripsCard.css";
import "../../App.css";
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
            <li>~{props.detailOne}</li>
            <li>~{props.detailTwo}</li>
            <li>~{props.detailThree}</li>
            <li>~{props.detailFour}</li>
          </ul>
        </div>
      </div>
      <a href={props.url} className="link">{props.linkName}</a>
    </div>
  );
}

export default UpcomingTripsCard;
