import React, {Component} from 'react';
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
//import Logo from "../Logo/Logo";
import "./LoginPage.css";
import LogoImg from "../../assets/images/login_logo.png";

// Class Based React Component
class LoginPage extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      username: "",
      password: ""
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount() {
    console.log("Component did mount");
  }


  // Runs after a component has been updated
  componentDidUpdate() {}


  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render(){
    return(
        <div className="LoginPage">
          <img className="LogoLogin" src={LogoImg}></img>
          <InputTextField name="email" placeholder="Email"/>
          <InputTextField name="password" placeholder="Password"/>
          <p className="ForgotPass">Forgot your password?</p>
          <p className="ForgotPass">Need an account?</p>
          <Button id="button" text="Login"/>
        </div>
    );
  }
}

export default LoginPage;
