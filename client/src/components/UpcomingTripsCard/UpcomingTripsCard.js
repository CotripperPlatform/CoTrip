
import React from 'react';
import "./UpcomingTripsCard.css";
// import InfoCard from "../InfoCard";

// Function based React Component
const UpcomingTripsCard = (props) => {

  // Default Class to apply to Component
  let classList = `UpcomingTripsCard`;


  return(
    <div className={classList}>
      <header>Upcoming Trips</header>
      <div className="info">
        {/* <InfoCard /> */}
        <div className="info-card"></div>
        <div className="text-info">
          <p className="general-information">General Information:</p>
          <ul>
            <li>~3 Days, 2 Nights</li>
            <li>~Resort Stay</li>
            <li>~Children Welcome</li>
            <li>~Guided Tours</li>
          </ul>
        </div>
      </div>
      <a href="#" className="link">More Details</a>
    </div>
  );
}

export default UpcomingTripsCard;
