import React from "react";
import Button from "components/Button/Button";
import logo from "assets/images/login_logo.png";
import "./SplashPage.css";
import { Route, Redirect } from "react-router-dom";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.toLogin = this.toLogin.bind(this);
    this.toRegister = this.toRegister.bind(this);
  }
  toLogin() {
    this.props.history.push("/login");
  }
  toRegister() {
    this.props.history.push("/register");
  }

  renderRedirect = () => {
    if (localStorage.getItem("token") != undefined) {
      return <Redirect to="/home" />;
    } else{
      console.log("Not logged in")
    }
  };


  render() {
    return (
      <div className="SplashPage">
        <img src={logo} alt="CoTripper Logo" />
        {this.renderRedirect()}
        <h1>CoTripper</h1>
        <p>Book trips, meet moms, and experience family travel together!</p>
        <Button text="Login" handleClick={this.toLogin} />
        <Button text="Register" color="purple" handleClick={this.toRegister} />
      </div>
    );
  }
}

export default SplashPage;
