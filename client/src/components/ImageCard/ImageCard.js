import React from "react";
import "./ImageCard.css";

// Function based React Component
const ImageCard = props => {
  // Default Class to apply to Component
  let classList = `ImageCard`;

  textEls = props.text.map(text => {
    return <p>{text}</p>;
  });
  return <div className={classList}>{textEls}</div>;
};

export default ImageCard;
