import React from "react";
import "./TrendingHashtagCard.css";
import Card from "../InfoCard/InfoCard";

const TrendingHashtagCard = props => {
  let { data } = props;

  return (
    <Card color="purple">
      <div className="hashtag-card-container">
        {props.children}
        <div className="hashtags-container">
          {data.map((item, key) => {
            return <div className="single-hashtag-container">{item}</div>;
          })}
        </div>
      </div>
    </Card>
  );
};

export default TrendingHashtagCard;
