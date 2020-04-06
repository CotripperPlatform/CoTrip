import React from "react";
import "./Banner.css";

const Banner = props => {
  let classList = '';
  if (props.bannerType === 'booktrip' ) {
    classList += ` Banner-booktrip`
  } else {
    classList += ` Banner`
  }
  return <div className={classList} style={{
    backgroundImage: `url(${props.background})`
  }}>
    {props.children}
  </div>;
};

export default Banner;

