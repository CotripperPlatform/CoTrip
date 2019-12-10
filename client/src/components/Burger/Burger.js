import React, { Component } from "react";
import "./Burger.css";

// Class Based React Component
class Burger extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Burger",
      active: false
    };
  }

  clicked = () => {
    this.setState({ active: !this.state.active })
  };

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    console.log(this.state.active);
    return (
      <div>
        <div className={this.state.classList} onClick={this.clicked}>
          <div className={
            this.state.active ? "burger-line-one burger-line-one-x" : "burger-line-one"
          }></div>
          <div className={
            this.state.active ? "burger-line-two fade" : "burger-line-two"
          }></div>
          <div className={
            this.state.active ? "burger-line-three burger-line-three-x" : "burger-line-three"
          }></div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default Burger;