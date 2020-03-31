import React, { Component } from "react";
import "./Burger.css";

class Burger extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="burger-container">
        <div className="div-line"></div>
        <div className="div-line"></div>
        <div className="div-line"></div>
      </div>
    );
  }
}
export default Burger;

// burger made
// when someone clickes on burger container, it brings up a dropdwon of li
// What other functionality is needed?
// what styling is needed
// fade away? Drop down from left? right? UP down?
