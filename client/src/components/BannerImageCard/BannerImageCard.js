import React from 'react';
import "./BannerImageCard.css";

const BannerImageCard = (props) => {
  return (
    <div className='BannerImageCard' style={{
      backgroundImage: `url(${props.background})`
    }}>
      <h2 className="BannerImageCard__text">{props.message}</h2>
    </div>
  );
}

export default BannerImageCard;
