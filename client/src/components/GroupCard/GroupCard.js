import React from 'react';
import "./GroupCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const GroupCard = (props) => {
  let { picture, name, members, location } = props;
  return (
    <Card color="pink" size="medium" picture={picture}>
      <Link className="GroupCard" to="#">
        <div className="GroupCard__text-container">
          <h2 className="GroupCard__group-name">{name}</h2>
          <footer className="GroupCard__details">
            <p className="GroupCard__members">{members} members</p>
            <p className="GroupCard__location">{location}</p>
          </footer>
        </div>
      </Link>
    </Card>
  );
}

export default GroupCard;
