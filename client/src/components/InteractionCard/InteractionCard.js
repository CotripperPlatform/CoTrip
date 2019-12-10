import React from "react";
import "./InteractionCard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Button from "../Button/Button";
// Function based React Component

const InteractionCard = props => {
  // Default Class to apply to Component
  let classList = `InteractionCard`;
  const handleClick = e => console.log("clicked");
  return (
    <div className={classList}>
      <Link to={props.to}>
        <img className={"image-interaction"} src={props.img}></img>
      </Link>
      <Button text="Submit" color="pink" size="small" handleClick={handleClick} />
      <Button text="Submit" color="outline" size="small" handleClick={handleClick} />
    </div>
  );
};

export default InteractionCard;
