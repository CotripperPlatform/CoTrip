
import React from 'react';
import "./GroupCard.css";

const GroupCard = (props) => {

  let classList = `GroupCard`;


  return(
    <div className={classList}>
      <p className="group-name">{props.name}</p>
      <div className="info-card-info">
        <p className="members">{props.members}</p>
        <p className="location">{props.location}</p>
      </div>
    </div>
  );
}

export default GroupCard;
