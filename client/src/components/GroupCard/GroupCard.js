import React from "react";
import "./GroupCard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const GroupCard = props => {
  let { picture, name, members, location, id } = props;
  return (
    <Card size="medium-short" picture={picture}>
      <Link className="GroupCard" to={`community/view-group/${id}`}>
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
};
GroupCard.defaultProps = {
  name: "Jimmy Dean",
  members: "9000",
  location: "Brookville, OH"
};

export default GroupCard;
