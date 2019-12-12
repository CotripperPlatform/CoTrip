import React, { useState } from 'react';
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
//import Logo from "../Logo/Logo";
import "./LoginPage.css";
import LogoImg from "../../assets/images/login_logo.png";

const LoginPage = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }

  function handleClick(e) {
    e.preventDefault();
  }

  return(
      <form className="LoginPageForm" onSubmit={handleSubmit}>
        <img className="LogoLogin" src={LogoImg} alt="CoTripper"></img>
        <InputTextField name="email" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)}/>
        <InputTextField name="password" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)}/>
        <p className="ForgotPass">Forgot your password?</p>
        <p className="ForgotPass">Need an account?</p>
        <Button id="button" text="Login" onClick={handleClick}/>
      </form>
  );
}

export default LoginPage;
