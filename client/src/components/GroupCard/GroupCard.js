
import React from 'react';
import "./GroupCard.css";

const GroupCard = (props) => {
  let background;
  if (props.url) {
    background = <img className="background-image" src={props.url} alt="group background" />;
  } else {
    background = "";
  }

  return(
    <div className="group-card">
      {background}
      <div className="text-container">
        <p className="group-name">{props.name}</p>
        <div className="details">
          <p className="members">{props.members} members</p>
          <p className="location">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
