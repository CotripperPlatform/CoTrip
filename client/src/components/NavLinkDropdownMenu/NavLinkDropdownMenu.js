import React from 'react';
import { Link } from 'react-router-dom';
import "./NavLinkDropdownMenu.css";

// NEED to fix Link to= once routes are made
const NavLinkDropdownMenu = (props) => (
  <ul className='NavLinkDropdownMenu'>
    {props.menuList.map(li => 
      <Link to={li.to}>
        <li>{li.text}</li>
      </Link>
    )}
  </ul>
);

export default NavLinkDropdownMenu;