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
      burgerClick: false,
      condensedMenu: "",
      // pageMark controls the triangle that marks which page the user is on.
      // Passing 0-3 as a prop into this component controls where it displays.
      pageMark: ["Navbar__show","","",""],
      // menuItems are careated in order of the following array. 
      menuItems: ["My Directory", "Community", "Forum", "Book a Trip"]
    };
  }

  // Handles activating the hamburger animation and displays the menu.
  handleBurgerClick = () => {
    this.setState({burgerClick: !this.state.burgerClick})
    if (this.state.burgerClick === false) {
      this.setState({condensedMenu: "Navbar__show"})
    } else {
      this.setState({ condensedMenu: "" });
    }
  }

  // Sets the location of the triangle on the menu.
  setPageMarker = () => {
    let setPage = [];
    for (let i = 0; i < 4; i++) {
      if (i === this.props.page) {
        setPage.push("Navbar__show");
      } else {
        setPage.push("");
      }
    }
    this.setState({ pageMark: setPage });
  }

  // Creates the menu
  setMenu = (type) => {
    if (type === 1) {
      return this.state.menuItems.map((item, key) => (
        <div className="Navbar__link-item">
          <NavLink text={item} to="/" menuList={[]} />
          <div className={`Navbar__triangle ${this.state.pageMark[key]}`}></div>
        </div>
      ));
    } else {
      return this.state.menuItems.map((item, key) => (
        <div className="Navbar__link-item">
          <NavLink text={item} to="/" menuList={[]} />
        </div>
      ));
    }
  }

  componentWillMount() {
    this.setPageMarker();
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__logo">
          <Logo clickable to="/route" />
        </div>
        <div className="Navbar__main">
          <div className="Navbar__menu">{this.setMenu(1)}</div>
          <div className="Navbar__right">
            <Icon icon={"search"} size="2x" onClick={this.props.searchClick} />
            <Icon icon={["far", "comment-dots"]} size="2x" onClick={this.props.messageClick} />
            <ProfilePicture type="extra-small" link="#" image={this.props.profileImage} />
          </div>
        </div>
        <div className="Navbar__burger">
          <Burger onClick={this.handleBurgerClick} active={this.state.burgerClick} />
          <div className={`Navbar__condensed-menu ${this.state.condensedMenu}`}>
            {this.setMenu()}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  page: PropTypes.number
};

Navbar.defaultProps = {
  page: 1
};

export default Navbar;
