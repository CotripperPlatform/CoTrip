import React from 'react';
import "./BookATripImage.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/hawaii.png";

const BookATripImage = (props) => {
  let {cards} = props;

  return(
    <div className="BookATripImage">
      <div className="BookATripImage__image-group">
        {cards.map(card => {
          console.log(card.image);
          return (
              <div className="BookATripImage__image-container">
                {/* <img src={require(`${card.image}`)} className="BookATripImage__image"></img> */}
                <div className="BookATripImage__image" style={{ backgroundImage: 'url(' + require(`${card.image}`) + ')' }}></div>
                <div><Link to={card.url} className="BookATripImage__link">{card.description}</Link></div>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default BookATripImage;