import React from "react";
import "./TrendingHashtagCard.css";
import Card from "../Card/Card";

const TrendingHashtagCard = props => {
  let { data } = props;

  return (
    <Card color="purple">
      <div className="TrendingHashtagCard_container">
        {props.children}
        <div className="TrendingHashtagCard_hashtags-container">
          {data.map(item => {
            return <div className="TrendingHashtagCard_hashtag">{item}</div>;
          })}
        </div>
      </div>
    </Card>
  );
};

export default TrendingHashtagCard;
