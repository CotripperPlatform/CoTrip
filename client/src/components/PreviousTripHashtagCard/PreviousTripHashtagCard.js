import React from "react";
import "./PreviousTripHashtagCard.css";
import "../../App.css";

// Function based React Component
const OtherCard = props => {
  console.log(props.children);
  let data;
  // if data is greater than 10 items only get the latest 10 items
  if (props.data.length > 10) {
    let dataLength = props.data.length - 1;
    data = props.data.slice(dataLength - 10, dataLength);
  } else {
    data = props.data;
  }

  return (
    <div className={"prev-hash-card-container"}>
      <div className="trips-content-container">
        {props.children}
        {props.type === "trips" && props.data.length > 0 ? (
          <a id="trips-page-anchor" href="">
            <div className="trip-slider-arrow" />
          </a>
        ) : null}
      </div>
      {props.data.length > 0 && props.type === "hashtags" ? (
        <div className="trips-names-container">
          {data.map(item => {
            return <div className="single-trip-container">{item}</div>;
          })}
        </div>
      ) : null}
      {props.data.length > 0 && props.type === "trips" ? (
        <div className="trip-images-container">
          {props.children[1]}
          {props.children[2]}
        </div>
      ) : null}
    </div>
  );
};

export default OtherCard;
