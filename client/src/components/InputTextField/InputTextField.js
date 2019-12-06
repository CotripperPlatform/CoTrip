import React, { Component } from "react";
import "./InputTextField.css";
/**
 * Created by Tyler
 *
 * Props will define the type of input field
 * Input fields include email, password, name, password, confirm password, city *  of residence, what is your age?, what is your dream destination, First name,*   last name, search my directory w/ magnifying glass,
 */

// Class Based React Component
class InputTextField extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "input-text-field-container"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    if (this.props.type === "Email") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="email" placeholder="Email" />
        </div>
      );
    }
  }
}

export default InputTextField;
