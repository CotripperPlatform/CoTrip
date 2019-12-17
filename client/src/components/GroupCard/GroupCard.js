import React from 'react';
import "./GroupCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const GroupCard = (props) => {
  let { picture, name, members, location } = props;
  return(
    <Card color="pink" size="medium" picture={picture}>
      <Link className="GroupCard" to="#">
        <div className="GroupCard__text-container">
          <p className="GroupCard__group-name">{name}</p>
          <div className="GroupCard__details">
            <p className="GroupCard__members">{members} members</p>
            <p className="GroupCard__location">{location}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default GroupCard;
