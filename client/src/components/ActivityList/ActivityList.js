import React from "react";
import Card from "../Card/Card";
import "./ActivityList.css";

const ActivityList = props => {
  let { title, color } = props;
  let activities = props.activities.map((activity, index) => {
    return (
      <Card key={index} size="extra-small" color={color} className="ActivityList__card">
        {activity}
      </Card>
    );
  });

  return (
    <div className={`ActivityList ActivityList--${color}`}>
      <header className="ActivityList__header">{title}</header>
      <div className="ActivityList__activities-container">{activities}</div>
    </div>
  );
};

export default ActivityList;
