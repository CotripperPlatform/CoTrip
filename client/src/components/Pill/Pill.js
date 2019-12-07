import React, { Component } from "react";
import "./Pill.css";

class Pill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }} className="pill-container">
        {this.props.text}
      </div>
    );
  }
}
export default Pill;
