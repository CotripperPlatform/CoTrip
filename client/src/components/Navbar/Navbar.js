import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import NavLink from "../NavLink/NavLink";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";

// Class Based React Component
class Navbar extends Component {
  constructor(props) {
    super(props);
    // Default CSS class to apply to the Component
    this.state = {
      condensedMenuActive: false,
      // menuItems are careated in order of the following array.
      menuItems: ["My Directory", "Community", "Forum", "Book a Trip"],
    };
  }

  clickHandler = () => {
    console.log("Clicked!")
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <Logo clickable to="/" />
        </div>
        <div className="Navbar__burger">
          {/* Handles activating the hamburger animation and displays the menu. */}
          <Burger
            onClick={() => {
              this.setState({ condensedMenuActive: !this.state.condensedMenuActive });
            }}
            active={this.state.condensedMenuActive}
          />
        </div>
        <div className={`Navbar__main ${this.state.condensedMenuActive && `Navbar__show`}`}>
          <div className="Navbar__menu">
            {this.state.menuItems.map((item, key) => (
              <div className="Navbar__link-item" key={key}>
                <NavLink text={item} to={"/"} menuList={[]} />
                {this.props.page === key && (
                  <div className={`Navbar__triangle`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="Navbar__right">
            <Icon icon={"search"} size="2x" onClick={this.clickHandler} />
            <Icon icon={["far", "comment-dots"]} size="2x" onClick={this.clickHandler} />
            <ProfilePicture type="extra-small" to={this.props.to} image={this.props.profileImage} />
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  page: PropTypes.number,
  image: PropTypes.string,
  to: PropTypes.string
};

Navbar.defaultProps = {
  page: 0,
  image: "../../assets/images/profile-picture-1.png",
  to: "/"
};

export default Navbar;
