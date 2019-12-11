import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "./SplashPage.css";

function handleClick() {
  console.log('login or register button clicked at splash page');
}
const SplashPage = () => {
  return (
    <div className='SplashPage'>
      <h1>CoTripper</h1>
      <p>Book trips, meet moms, and experience family travel together!</p>
      <div className='SplashPage__button-margin--small'>
        <Link to='/login'><Button text="Login" handleClick={handleClick}/></Link>
      </div>
      <div className='SplashPage__button-margin'>
        <Link to='/register'><Button text="Register" color="purple" handleClick={handleClick}/></Link>
      </div>
    </div>
  );
}

export default SplashPage;