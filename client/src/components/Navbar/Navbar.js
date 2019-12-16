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
      pageMark: ["Navbar__show","","",""]
    };
  }

  handleBurgerClick = () => {
    this.setState({burgerClick: !this.state.burgerClick})
    if (this.state.burgerClick === false) {
      this.setState({condensedMenu: "Navbar__show"})
    } else {
      this.setState({ condensedMenu: "" });
    }
  }

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
          <div className="Navbar__menu">
            <div className="Navbar__link-item">
              <NavLink
                text="My Directory"
                to="/"
                menuList={[]}
              />
              <div className={`Navbar__triangle ${this.state.pageMark[0]}`}></div>
            </div>
            <div className="Navbar__link-item">
              <NavLink
                text="Community"
                to="/"
                menuList={[]}
              />
              <div className={`Navbar__triangle ${this.state.pageMark[1]}`}></div>
            </div>
            <div className="Navbar__link-item">
              <NavLink
                text="Forum"
                to="/"
                menuList={[]}
              />
              <div className={`Navbar__triangle ${this.state.pageMark[2]}`}></div>
            </div>
            <div className="Navbar__link-item">
              <NavLink
                text="Book A Trip"
                to="/"
                menuList={[]}
              />
              <div className={`Navbar__triangle ${this.state.pageMark[3]}`}></div>
            </div>
          </div>
          <div className="Navbar__right">
            <Icon icon={"search"} size="2x" onClick={this.props.searchClick} />
            <Icon icon={["far", "comment-dots"]} size="2x" onClick={this.props.messageClick} />
            <ProfilePicture type="extra-small" link="#" image={this.props.profileImage} />
          </div>
        </div>
        <div className="Navbar__burger">
          <Burger onClick={this.handleBurgerClick} active={this.state.burgerClick} />
          <div className={`Navbar__condensed-menu ${this.state.condensedMenu}`}>
            <NavLink text="My Directory" to="/" menuList={[]} />
            <NavLink text="Community" to="/" menuList={[]} />
            <NavLink text="Forum" to="/" menuList={[]} />
            <NavLink text="Book A Trip" to="/" menuList={[]} />
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
