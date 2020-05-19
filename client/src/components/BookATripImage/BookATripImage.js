import React from "react";
import "./BookATripImage.css";
import { Link } from "react-router-dom";

const BookATripImage = props => {
  return (
    <div className="BookATripImage">
      <div className="BookATripImage__image-group">
        {props.cards.map((card, i) => {
          return (
            <div className="BookATripImage__image-container" key={i}>
              <Link to={card.url} className="BookATripImage__link">
                {" "}
                <div
                  className="BookATripImage__image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>{" "}
              </Link>
              <div>
                <Link to={card.url} className="BookATripImage__link">
                  {card.description}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
BookATripImage.defaultProps = {
  cards: []
};
export default BookATripImage;
