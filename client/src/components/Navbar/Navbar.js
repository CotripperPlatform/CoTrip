import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NavLink from "../NavLink/NavLink";
import { checkPropTypes } from "prop-types";

// Function based React Component
const Navbar = props => {
  // Default Class to apply to Component

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <Logo clickable to="/route" />
      </div>
      <div className="Navbar__main">
        <div className="Navbar__menu">
          <div className="Navbar__link-item">
            <NavLink
              text="My Directory"
              to="/"
              menuList={[
                { text: "Link 1", to: "/" },
                { text: "Link 2", to: "/" }
              ]}
            />
            <div className="Navbar__triangle Navbar__hidden"></div>
          </div>
          <div className="Navbar__link-item">
            <NavLink
              text="Community"
              to="/"
              menuList={[
                { text: "Link 1", to: "/" },
                { text: "Link 2", to: "/" }
              ]}
            />
            <div className="Navbar__triangle Navbar__hidden"></div>
          </div>
          <div className="Navbar__link-item">
            <NavLink
              text="Forum"
              to="/"
              menuList={[
                { text: "Link 1", to: "/" },
                { text: "Link 2", to: "/" }
              ]}
            />
            <div className="Navbar__triangle"></div>
          </div>
          <div className="Navbar__link-item">
            <NavLink
              text="Book A Trip"
              to="/"
              menuList={[
                { text: "Link 1", to: "/" },
                { text: "Link 2", to: "/" }
              ]}
            />
            <div className="Navbar__triangle Navbar__hidden"></div>
          </div>
        </div>
        <div className="Navbar__right">
          <div className="Navbar__profile">
            <ProfilePicture type="extra-small" link="#" image={props.profileImage} />
          </div>
        </div>
      </div>
      <div className="Navbar__burger">
        <Burger onClick={props.burgerClick} active={props.showCondensedMenu} />
      </div>
    </div>
  );
};

export default Navbar;
