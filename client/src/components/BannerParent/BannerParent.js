import React from "react";
import "./BannerParent.css";

const BannerParent = props => {
  BannerParent.defaultProps = {
    bannerType: "home"
  };

  return <div className={`banner-parent banner-${props.bannerType}`}>{props.children}</div>;
};

export default BannerParent;
