import React from "react";
import "./InteractionCard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// Function based React Component
const InteractionCard = props => {
  // Default Class to apply to Component
  let classList = `InteractionCard`;

  return (
    <div className={classList}>
      <Link to={props.to}>
        <img className={"image-interaction"} src={props.img}></img>
      </Link>
      <button className="connect-small" onclick={props.connect}></button>
      <button className="message-small" onclick={props.message}></button>
    </div>
  );
};

export default InteractionCard;
