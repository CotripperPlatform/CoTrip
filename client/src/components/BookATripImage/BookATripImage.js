import React from 'react';
import "./BookATripImage.css";
import { Link } from "react-router-dom";

const BookATripImage = (props) => {
  let {cards} = props;

  return(
    <div className="BookATripImage">
      <div className="BookATripImage__image-group">
        {cards.map(card => {
          return (
            <div className="BookATripImage__image-container">
              <img src={require(`../../assets/images/${card.image}.png`)} className="BookATripImage__image"></img>
              <div><Link to={card.url} className="BookATripImage__link">{card.description}</Link></div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default BookATripImage;