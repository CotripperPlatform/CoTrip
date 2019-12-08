
import React from 'react';
import "./InfoCard.css";

// Function based React Component
const InfoCard = (props) => {

  // Default Class to apply to Component
  let classList = `InfoCard`;
  let types = ['group', 'location'];

  if (types.includes(props.type)) {
    classList += ` ${props.type}`
  }

  if (props.type === "group"){
    return(
      <div className={classList}>
        <p className='group-name'>{props.name}</p>
        <div className='info-card-info'>
          <p className='members'>{props.members}</p>
          <p className='location'>{props.location}</p>
        </div>
      </div>
    )
  }

  if (props.type === "location"){
    return (
      <div className={classList}>
        <p className='location-name'>{props.name}</p>
        <div className='date'>
          {props.date}
        </div>
      </div>
    )
  }
}

export default InfoCard;
