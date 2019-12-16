import React from 'react';
import "./GroupCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const GroupCard = (props) => {
  return(
    <Card color="pink" size="medium">
      <Link className="GroupCard" to="#" style={{ backgroundImage: `url(${props.picture})` }}>
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
GroupCard.defaultProps = {
  name: "Jimmy Dean",
  members: "9000",
  location: "Brookville, OH"
}

export default GroupCard;
