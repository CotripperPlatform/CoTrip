import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import logo from 'assets/images/login_logo.png';
import "./SplashPage.css";

function toLogin() {
  window.location.href = '/login';
}
function toRegister() {
  window.location.href = '/register';
}

const SplashPage = (props) => {
  return (
    <div className='SplashPage'>
      <img src={logo} alt='CoTripper Logo'/>
      <h1>CoTripper</h1>
      <p>Book trips, meet moms, and experience family travel together!</p>
      <Button text="Login" handleClick={toLogin} />
      <Button text="Register" color="purple" handleClick={toRegister} />
    </div>
  );
}

export default SplashPage;
