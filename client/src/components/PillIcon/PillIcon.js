import React, { Component } from "react";
import "./PillIcon.css";

// Function based React Component
// const PillIcon = props => {
//   // Default Class to apply to Component
//   let classList = `PillIcon`;

//   return <div className={classList}>PillIcon</div>;
// };

// export default PillIcon;

class PillIcon extends Component {
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
export default PillIcon;
