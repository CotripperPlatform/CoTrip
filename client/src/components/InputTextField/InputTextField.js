import React, { Component } from "react";
import "./InputTextField.css";
import searchIcon from "../../../../assets/images/global-nav_search_icon.png";
/**
 * Created by Tyler
 *
 * Props will define the type of input field
 * Input fields include email, password, name, confirm password, city of residence, what is your age?, what is your dream destination, First name,   last name, search my directory, search trips.
 *
 * I think we'll need to implement a function on these to retrieve the data typed in when pressing a submit button. I wasn't sure how to do this with just the standalone components in storybook.
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
      classListSearch: "input-text-field-container search",
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
    let { type, name, placeholder, onChange } = this.props;
    let classList = "input-text-field-container";
    if (this.props.type === "small") {
      classList = "input-text-field-container-small";
    } else if (this.props.search) {
      classList = "input-text-field-container search";
    }

    return (
      <div className={classList}>
        <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
      </div>
    );

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
        <div className={this.state.classListSearch}>
          <svg viewBox="-4 -2 24 24">
            <path
              fill="#bababa"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
          <input type="text" name="name" placeholder="Search My Directory" />
        </div>
      );
    }
    if (this.props.type === "Search Trips") {
      return (
        <div className={this.state.classListSearch}>
          <svg viewBox="-4 -2 24 24">
            <path
              fill="#bababa"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
          <input type="text" name="name" placeholder="Search Trips" />
        </div>
      );
    }
  }
}

export default InputTextField;
