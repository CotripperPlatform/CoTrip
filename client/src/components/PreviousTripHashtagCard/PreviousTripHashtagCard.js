import React from "react";
import "./PreviousTripHashtagCard.css";
import "../../App.css";

// Function based React Component
const PreviousTripHashtagCard = props => {
  console.log(props);
  // Default Class to apply to Component
  const classList = `prev-hash-card-container`;
  let data;
  // if data is greater than 10 items only get the latest 10 items
  if (props.data.length > 10) {
    let dataLength = props.data.length - 1;
    data = props.data.slice(dataLength - 10, dataLength);
  } else {
    data = props.data;
  }

  return (
    <div className={classList}>
      <div className="trips-content-container">
        {props.children}
        {props.type === "trips slider" ? <div className="trip-slider-arrow" /> : null}
      </div>
      {props.data.length > 0 ? (
        <div className="trips-names-container">
          {data.map(item => {
            return <div className="single-trip-container">{item}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PreviousTripHashtagCard;
