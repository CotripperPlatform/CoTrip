import React from 'react';
import "./Navbar.css";
import Logo from "../Logo/Logo"

// Function based React Component
const Navbar = (props) => {

  // Default Class to apply to Component
  let classList = `Navbar`;


  return (
    <div className={classList}>
      <div className="navbar-logo">
        <Logo clickable to="/route" />
      </div>
    </div>
  );
}

export default Navbar;
