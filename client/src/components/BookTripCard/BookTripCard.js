import React, { Component } from "react";
import "./BookTripCard.css";
import Card from "../Card/Card";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const BookTripCard = props => {
  // Default Class to apply to Component
  let classList = `InteractionCard`;
  let [title, image1, image2, link] = [
    props.children[0],
    props.children[1],
    props.children[2],
    props.children[3]
  ];

  return (
    <Card color="pink" size="large">
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
      <Link to={props.to}>{props.children[3]}</Link>
    </Card>
  );
};

export default BookTripCard;
