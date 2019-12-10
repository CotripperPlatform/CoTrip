
import React from 'react';
import "./UpcomingTripsCard.css";
import { Link } from "react-router-dom";

const UpcomingTripsCard = (props) => {

  let classList = `UpcomingTripsCard`;
  let details = props.details;

  return(
    <div className={classList}>
      <header>{props.header}</header>
      <div className="info">
        {/* placeholder: */}
        <div className="InfoCard"></div>
        <div className="text-info">
          <p className="general-information">General Information:</p>
          <ul>
            {details.map(detail => {
              return <li>~{detail}</li>
            })}
          </ul>
        </div>
      </div>
      <Link className="link" to={props.url}>{props.linkText}</Link>
    </div>
  );
}

export default UpcomingTripsCard;
