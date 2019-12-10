import React from 'react';
import "./GroupCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const GroupCard = (props) => {

  let background;

  if (props.url) {
    background = <img className="GroupCard__background-image" src={props.url} alt="group background" />;
  } else {
    background = "";
  }

  return(
    <Card color="pink" size="medium">
      <Link className="GroupCard" to="#">
        {background}
        <div className="GroupCard__text-container">
          <p className="GroupCard__group-name">{props.name}</p>
          <div className="GroupCard__details">
            <p className="GroupCard__members">{props.members} members</p>
            <p className="GroupCard__location">{props.location}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default GroupCard;
