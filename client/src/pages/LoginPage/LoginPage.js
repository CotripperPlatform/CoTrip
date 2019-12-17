import React, { Component } from 'react';
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import "./LoginPage.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""}
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render() {
    return(
      <div className="LoginPage">
        <Logo large />
        <div className="LoginPage__form-container">
          <form className="LoginPage__form" onSubmit={e => this.props.handleLogin(e, this.state)}>
            <InputTextField name="email" placeholder="Email" value={this.state.email}
                onChange={this.handleChange}/>
            <InputTextField name="password" placeholder="Password"
                onChange={this.handleChange} value = {this.state.password}/>
            <Button text="Login" type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}
