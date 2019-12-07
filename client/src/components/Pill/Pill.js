import React, { Component } from "react";
import "./Pill.css";

// // Function based React Component
// const Pill = props => {
//   // Default Class to apply to Component
//   let classList = `pill-container`;

//   return (
//     <div className={classList}>
//       <h1 className="pill-container">Topic</h1>
//     </div>
//   );
// };

// export default Pill;

class Pill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="pill-container">{this.props.topic}</div>;
  }
}
export default Pill;
