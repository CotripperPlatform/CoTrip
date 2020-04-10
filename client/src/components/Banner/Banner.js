import React from "react";
import "./Banner.css";

const Banner = props => {
  const {type, background, children} = props;
  return <div className={`Banner ${type === 'BannerLarge' ? 'Banner--large' : ''}`} style={{
    backgroundImage: `url(${background})`
  }}>
    {children}
  </div>;
};

export default Banner;

