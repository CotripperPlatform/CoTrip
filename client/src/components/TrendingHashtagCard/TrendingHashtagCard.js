import React from "react";
import "./TrendingHashtagCard.css";
import Card from "../Card/Card";

const TrendingHashtagCard = props => {
  let { data } = props;
  if (data.length > 10) {
    let dataLength = data.length;
    data = data.slice(dataLength - 10, dataLength);
  }

  return (
    <Card color="purple">
      <div className="TrendingHashtagCard__container">
        {props.children}
        <div className="TrendingHashtagCard__hashtags-container">
          {data.map((item, index) => {
            return (
              <div key={index} className="TrendingHashtagCard__hashtag">
                <a href="/">{item}</a>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default TrendingHashtagCard;
