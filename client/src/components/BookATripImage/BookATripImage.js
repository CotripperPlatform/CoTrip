import React from 'react';
import "./BookATripImage.css";

const BookATripImage = (props) => {
  return(
    <div className="BookATripImage">
      <div className="BookATripImage__image-group">
        <div className="BookATripImage__image-container">
          {props.images.map(image => {
            return <img src={require(`../../assets/images/${image}.png`)} className="BookATripImage__image"></img>
            // <p>{image}</p>
          })}
        </div>
      </div>
    </div>
  );
}

export default BookATripImage;
