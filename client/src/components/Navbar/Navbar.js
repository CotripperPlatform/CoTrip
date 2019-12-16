import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NavLink from "../NavLink/NavLink";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

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
            <div className={`Navbar__triangle ${props.menu1}`}></div>
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
            <div className={`Navbar__triangle ${props.menu2}`}></div>
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
            <div className={`Navbar__triangle ${props.menu3}`}></div>
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
            <div className={`Navbar__triangle ${props.menu4}`}></div>
          </div>
        </div>
        <div className="Navbar__right">
          <Icon icon={"search"} size="2x" onClick={props.searchClick} />
          <Icon icon={["far", "comment-dots"]} size="2x" onClick={props.messageClick} />
          <ProfilePicture type="extra-small" link="#" image={props.profileImage} />
        </div>
      </div>
      <div className="Navbar__burger">
        <Burger onClick={props.burgerClick} active={props.showCondensedMenu} />
        <div className={`Navbar__condensed-menu ${props.condensedMenu}`}>
          <NavLink text="My Directory" to="/" menuList={[]} />
          <NavLink text="Community" to="/" menuList={[]} />
          <NavLink text="Forum" to="/" menuList={[]} />
          <NavLink text="Book A Trip" to="/" menuList={[]} />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  showCondensedMenu: PropTypes.bool,
  menu1: PropTypes.string,
  menu2: PropTypes.string,
  menu3: PropTypes.string,
  menu4: PropTypes.string,
  burgerClick: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  showCondensedMenu: false,
  menu1: "Navbar_show",
  menu2: "",
  menu3: "",
  menu4: "",
};

export default Navbar;
