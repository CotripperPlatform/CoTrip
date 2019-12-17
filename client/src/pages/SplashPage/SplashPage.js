import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'components/Button/Button';
import logo from 'assets/images/login_logo.png';
import "./SplashPage.css";

function toLogin() {
  return <Redirect to='/login' />;
}
function toRegister() {
  return <Redirect to='/register' />;
}

const SplashPage = () => {
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
