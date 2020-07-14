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
        <div className="BookTripCard__image-left">{image1}</div>

        <div className="BookTripCard__image-right">{image2}</div>
      </div>
      <div className="BookTripCard__trip-link">
        <Link to={props.link}>Book a Trip Now!</Link>
      </div>
    </Card>
  );
};
BookTripCard.defaultProps = {
  children: [<h1>Book a Trip</h1>, <Card size="medium-small" />, <Card size="medium-small" />],
  link: "/book-a-trip"
};
export default BookTripCard;
