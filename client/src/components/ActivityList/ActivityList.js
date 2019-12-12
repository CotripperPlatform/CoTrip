import React from "react";
import Card from "../Card/Card";
import "./ActivityList.css";

const ActivityList = props => {
  let classList = `ActivityList`;
  let activities = props.activities.map((activity, index) => {
    return (
      <Card key={index} size="small" className={classList}>
        {activity}
      </Card>
    );
  });

  return (
    <div className={classList}>
      <header className="ActivityList__header">Activities for Mom</header>
      {activities}}
    </div>
  );
};

export default ActivityList;
