
import React from 'react';
import "./BannerImageCard.css";

const BannerImageCard = (props) => {
  return(
    <div className='BannerImageCard' style={{
      backgroundImage: `url(${props.background})`
    }}>
      {props.children}
    </div>
  );
}

export default BannerImageCard;
