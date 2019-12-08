import React from "react";
import "./PreviousTripHashtagCard.css";

// Function based React Component
const PreviousTripHashtagCard = props => {
  console.log(props);
  // Default Class to apply to Component
  let classList = `prev-hash-card-container`;
  let classListHashtags = `prev-hash-card-container hashtags`;

  if (props.data.length === 0 && props.type === "trips") {
    return (
      <div className={classList}>
        <div className="trips-content-container">
          <h1>Previous Trips</h1>
          <div className="no-trips-container">
            <h2>None with CoTripper yet!</h2>
            <a href="#">Book a Trip Now!</a>
          </div>
        </div>
      </div>
    );
  }
  if (props.data.length > 0 && props.type === "trips") {
    return (
      <div className={classList}>
        <div className="trips-content-container">
          <h1>Previous Trips</h1>
          <div className="trips-names-container">
            {props.data.map(item => {
              return <div className="single-trip-container">{item}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
  // each item will have to be a link
  // each item will be numbered
  const NUMS_ARRAY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  if (props.data.length > 0 && props.type === "hashtags") {
    return (
      <div className={classListHashtags}>
        <div className="trips-content-container">
          <h1>Trending Hashtags</h1>
          <div className="trips-names-container">
            {props.data.map((item, key) => {
              return (
                <div className="single-hashtag-container">
                  <div>
                    <h3>
                      {key + 1} <a href="#">{item}</a>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default PreviousTripHashtagCard;
