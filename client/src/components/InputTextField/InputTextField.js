import React, { Component } from "react";
import "./InputTextField.css";
/**
 * Created by Tyler
 *
 * Props will define the type of input field
 * Input fields include email, password, name, confirm password, city of residence, what is your age?, what is your dream destination, First name,   last name, search my directory w/ magnifying glass,
 */

// Class Based React Component
class InputTextField extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "input-text-field-container",
      classListSmall: "input-text-field-container-small",
      email: "",
      name: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.email);
  };

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
          <input type="text" name="email" placeholder="Email" onChange={this.changeHandler} />
        </div>
      );
    }
    if (this.props.type === "Name") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="Name" />
        </div>
      );
    }
    if (this.props.type === "City") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="City of Residence" />
        </div>
      );
    }
    if (this.props.type === "Age") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="What is your age?" />
        </div>
      );
    }
    if (this.props.type === "Dream") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="What is your dream destination(s)?" />
        </div>
      );
    }
    if (this.props.type === "First Name") {
      return (
        <div className={this.state.classListSmall}>
          <input type="text" name="name" placeholder="First Name" />
        </div>
      );
    }
    if (this.props.type === "Last Name") {
      return (
        <div className={this.state.classListSmall}>
          <input type="text" name="name" placeholder="Last Name" />
        </div>
      );
    }
    if (this.props.type === "Email Small") {
      return (
        <div className={this.state.classListSmall}>
          <input type="text" name="email" placeholder="Email" onChange={this.changeHandler} />
        </div>
      );
    }
    if (this.props.type === "Password") {
      return (
        <div className={this.state.classList}>
          <input type="password" name="name" placeholder="Password" />
        </div>
      );
    }
    if (this.props.type === "Confirm Password") {
      return (
        <div className={this.state.classList}>
          <input type="password" name="name" placeholder="Confirm Password" />
        </div>
      );
    }
    if (this.props.type === "Search Directory") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="Search My Directory" />
        </div>
      );
    }
    if (this.props.type === "Search Trips") {
      return (
        <div className={this.state.classList}>
          <input type="text" name="name" placeholder="Search Trips" />
        </div>
      );
    }
  }
}

export default InputTextField;
