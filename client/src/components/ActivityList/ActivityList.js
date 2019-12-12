import React from "react";
import Card from "../Card/Card";
import "./ActivityList.css";

const ActivityList = props => {
  let activities = props.activities.map((activity, index) => {
    return (
      <Card key={index} className="ActivityList__card">
        {activity}
      </Card>
    );
  });

  return (
    <div className="ActivityList">
      <header className="ActivityList__header">Activities for Mom</header>
      {activities}
    </div>
  );
};

export default ActivityList;
