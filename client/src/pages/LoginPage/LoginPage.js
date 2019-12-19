import React, { Component } from "react";
import InputTextField from "../../components/InputTextField/InputTextField";
import Logo from "../../components/Logo/Logo";
import "./LoginPage.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state, this.props.history);
  };

  render() {
    return (
      <div className="LoginPage">
        <Logo large />
        <div className="LoginPage__form-container">
          <form className="LoginPage__form" onSubmit={this.handleSubmit}>
            <InputTextField
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <InputTextField
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />

            <input className="LoginPage__submit" text="Login" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
