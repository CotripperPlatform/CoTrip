import React from 'react';
import "./BookATripImage.css";
import { Link } from "react-router-dom";

const BookATripImage = (props) => {

  return(
    <div className="BookATripImage">
      <div className="BookATripImage__image-group">
        {props.cards.map(card => {
          return (
              <div className="BookATripImage__image-container">
                <div className="BookATripImage__image" style={{ backgroundImage: `url(${card.image})`}}></div>
                <div><Link to={card.url} className="BookATripImage__link">{card.description}</Link></div>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default BookATripImage;