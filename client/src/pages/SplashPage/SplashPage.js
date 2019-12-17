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
      <h1 data-cy="title">CoTripper</h1>
      <p data-cy="body" >Book trips, meet moms, and experience family travel together!</p>
      <Button data-cy="btn1" text="Login" handleClick={toLogin} />
      <Button data-cy="btn2"text="Register" color="purple" handleClick={toRegister} />
    </div>
  );
}

export default SplashPage;
