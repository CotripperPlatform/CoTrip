
import React from 'react';
import "./InfoCard.css";

// Function based React Component
const InfoCard = (props) => {

  // Default Class to apply to Component
  let classList = `InfoCard`;
  let name = ['Group Name', 'Location']
  //if Group Card, classNames are groupName, members, and location
  //if Location card, classNames are locationName and date

  return(
    <div className={classList}>
      <p className='groupName locationName'>Group Name</p>
      <div className='infoCardInfo'>
        <p className='members'># of Members</p>
        <p className='location'>Location, State</p>
      </div>
      {/* <p className='date'></p> */}
    </div>
  );
}

export default InfoCard;
