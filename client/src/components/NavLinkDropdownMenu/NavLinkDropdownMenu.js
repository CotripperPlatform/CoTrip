import React from "react";
import { Link } from "react-router-dom";
import "./NavLinkDropdownMenu.css";

const NavLinkDropdownMenu = props => (
  <ul className="NavLinkDropdownMenu">
    {props.menuList.length
      ? props.menuList.map(li => (
          <Link to={li.to} key={li.text}>
            <li>{li.text}</li>
          </Link>
        ))
      : []}
  </ul>
);

NavLinkDropdownMenu.defaultProps = {
  menuList: []
};

export default NavLinkDropdownMenu;
