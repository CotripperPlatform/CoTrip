import React from "react";
import { Link } from "react-router-dom";
import "./NavLinkDropdownMenu.css";

const NavLinkDropdownMenu = props => (
  <ul data-test="NavLinkDropdownMenu" className="NavLinkDropdownMenu">
    {props.menuList.map(li => (
      <Link to={li.to} data-test="navLink">
        <li>{li.text}</li>
      </Link>
    ))}
  </ul>
);

export default NavLinkDropdownMenu;
