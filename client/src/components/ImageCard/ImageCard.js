import React from "react";
import "./ImageCard.css";

// Function based React Component
const ImageCard = props => {
  // Default Class to apply to Component
  let classList = `ImageCard`;
  let image = <img className="backgroundImage" src={props.url} alt="trip background" />;
  let textEls = props.text.map((text, index) => {
    if (index === 0) {
      return (
        <h3 className="first" key={index}>
          {text}
        </h3>
      );
    }
    return (
      <h3 className="textEl" key={index}>
        {text}
      </h3>
    );
  });
  return (
    <div className={classList}>
      {image}
      <div className="textHolder">{textEls}</div>
    </div>
  );
};

export default ImageCard;
