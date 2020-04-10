import React from "react";
import "./Banner.css";

const Banner = props => {
  const {type, background, children} = props;
  // let classList = 'Banner';
  // if (props.type === 'BannerLarge' ) {
  //   classList += ` Banner--large`
  // } 
  return <div className={`Banner ${type === 'BannerLarge' ? 'Banner--Large' : ''}`} style={{
    backgroundImage: `url(${background})`
  }}>
    {children}
  </div>;
};

export default Banner;

