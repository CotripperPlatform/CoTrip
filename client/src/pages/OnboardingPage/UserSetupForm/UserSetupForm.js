import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import "./UserSetupForm.css";

class UserSetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  updateValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  confirmPassword = e => {
    e.preventDefault();
    this.setState({
      confirmPassword: e.target.value
    });
  };
  next = () => {
    let regexEmail = /.+@.+\..+/;
    let regexPassword = /(^(?=.*[a-z])(?=.*[A-Z])(\S{6,}))/;

    if (
      this.state.confirmPassword === this.state.password &&
      this.state.email.match(regexEmail) &&
      this.state.password.match(regexPassword)
    ) {
      this.props.save("setup", this.state);
      this.props.handleClick();
    } else {
      alert(
        "Error: Registration failed. Please make sure: \n You have entered a valid/unregistered email address \n Your password information matches both fields \n Your password matches the provided password requirements"
      );
    }
  };
  render() {
    return (
      <div>
        <h1 className="OnboardingPage__header">Step One</h1>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            className="OnboardingPage__container"
            type="password"
            name="confirm password"
            placeholder="Confirm Password"
            onChange={this.confirmPassword}
          ></InputTextField>
          <div className="OnboardingPage__requirement-container">
            <div className="OnboardingPage__password-box">
              <h5 className="OnboardingPage__requirement-text">
                Password Requirements:<br></br> MUST contain at least 6 characters (12+ recommended)
                <br></br>
                MUST contain at least one uppercase letter<br></br>MUST contain at least one
                lowercase letter
                <br></br> MUST contain at least one number <br></br>MUST contain at least one
                special character (!#$%*+, etc)
              </h5>
            </div>
          </div>
        </div>
        <div className="OnboardingPage__button-container">
          <Button text="Next" size="small" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default UserSetupForm;
