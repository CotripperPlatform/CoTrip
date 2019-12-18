
import React from "react";
import "./BookTripCard.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const BookTripCard = props => {
  // Default Class to apply to Component
  let [title, image1, image2] = [props.children[0], props.children[1], props.children[2]];
  return (
    <Card color="pink">
      <div className="BookTripCard__title-wrapper">{title}</div>
      <div className="BookTripCard__content-wrapper">
        {image1}
        <span>{image2}</span>
      </div>
      <div className="BookTripCard__trip-link">
        <Link to={props.link}>Book a Trip Now!</Link>
      </div>
    </Card>
  );
};
BookTripCard.defaultProps={
  children:[<h1>Book a Trip</h1>,
    <Card size='medium' />,
    <Card size='medium'/>],
    link:"/"
}
export default BookTripCard;