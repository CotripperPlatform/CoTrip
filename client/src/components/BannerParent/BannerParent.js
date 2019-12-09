import React from "react";
import "./BannerParent.css";

const BannerParent = props => {
  BannerParent.defaultProps = {
    type: "home"
  };

  return <div className={`banner-parent banner-${props.type}`}>{props.children}</div>;
};

export default BannerParent;
