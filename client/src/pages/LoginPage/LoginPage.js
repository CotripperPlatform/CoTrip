import React, { useState } from 'react';
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";
//import Logo from "../Logo/Logo";
import "./LoginPage.css";
import LogoImg from "../../assets/images/login_logo.png";
import { faDivide } from '@fortawesome/free-solid-svg-icons';

const LoginPage = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
  }

  return(
    <div className="LoginPageMain">
      <img className="LoginPageLogo" src={LogoImg} alt="CoTripper"></img>
      <div className="LoginPageFormContainer">
        <form className="LoginPageForm" onSubmit={handleSubmit}>
          <InputTextField name="email" placeholder="Email" value={email}
              onChange={e => setEmail(e.target.value)}/>
          <InputTextField name="password" placeholder="Password" value={password}
              onChange={e => setPassword(e.target.value)}/>
          <p className="LoginPageForgotPass">Forgot your password?</p>
          <p className="LoginPageForgotPass">Need an account?</p>
          <Button text="Login" handleClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
