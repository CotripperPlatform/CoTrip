import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "./SplashPage.css";

const SplashPage = () => {
  return (
    <div className='SplashPage'>
      <h1>CoTripper</h1>
      <p>Book trips, meet moms, and experience family travel together!</p>
      <Link to='/login'><Button text="Login" /></Link>
      <Link to='/register'><Button text="Register" color="purple" /></Link>
    </div>
  );
}

export default SplashPage;