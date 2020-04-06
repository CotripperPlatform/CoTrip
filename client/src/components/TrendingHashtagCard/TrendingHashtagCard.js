import React from "react";
import "./TrendingHashtagCard.css";
import Card from "../Card/Card";

const TrendingHashtagCard = props => {
  let { data } = props;
  console.log(data);

  let hashtagsColumnOne = data.length > 5 ? data.slice(0, 5) : null;
  let hashtagsColumnTwo = data.length > 5 ? data.slice(5, props.length) : null;
  if (data.length > 10) {
    let dataLength = data.length;
    data = data.slice(dataLength - 10, dataLength);
  }

  return (
    <Card color="purple">
      <div className="TrendingHashtagCard__container">
        {props.children}
        <div className="TrendingHashtagCard__columns-wrapper">
          <div className="TrendingHashtagCard__hashtags-container">
            {hashtagsColumnOne.map((item, index) => {
              return (
                <div key={index} className="TrendingHashtagCard__hashtag">
                  <a href="/coming_soon">{item}</a>
                </div>
              );
            })}
          </div>
          <div className="TrendingHashtagCard__hashtags-container">
            {hashtagsColumnTwo.map((item, index) => {
              return (
                <div key={index} className="TrendingHashtagCard__hashtag">
                  <a href="/coming_soon">{item}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

TrendingHashtagCard.defaultProps = {
  data: []
};

export default TrendingHashtagCard;
