import React from "react";
import "./Burger.css";

const Burger = (props) => {
  return (
    <div className={`Burger ${props.active && "Burger--active"}`} onClick={props.onClick}>
      <div className={"Burger__line"}></div>
      <div className={"Burger__line"}></div>
      <div className={"Burger__line"}></div>
    </div>
  );
};

Burger.defaultProps = {
  active: false
};

export default Burger;
