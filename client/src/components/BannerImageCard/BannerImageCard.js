import React from 'react';
import "./BannerImageCard.css";

const BannerImageCard = (props) => {
  return (
    <div className='BannerImageCard' style={{
      backgroundImage: `url(${props.background})`
    }}>
      <h2 style={{ margin: 0, marginTop: "8rem", marginRight: "2rem" }}>{props.message}</h2>
    </div>
  );
}

export default BannerImageCard;
