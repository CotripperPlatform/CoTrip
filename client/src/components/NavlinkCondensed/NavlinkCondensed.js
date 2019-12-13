import { Link } from "react-router-dom";
import React from 'react';
import "./NavlinkCondensed.css";

// Function based React Component
const NavlinkCondensed = (props) => {

  // Default Class to apply to Component
  let classList = `NavlinkCondensed`;


  return (
    <div className={classList}>
      <Link to="/">
        <h2>My Directory</h2>
      </Link>
      <Link to="/">
        <h2>Community</h2>
      </Link>
      <Link to="/">
        <h2>Forum</h2>
      </Link>
      <Link to="/">
        <h2>Book A Trip</h2>
      </Link>
    </div>
  );
}

export default NavlinkCondensed;
