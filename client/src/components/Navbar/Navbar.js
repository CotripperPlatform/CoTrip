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
      condensedMenu: "",
      // pageMark controls the triangle that marks which page the user is on.
      // Passing 0-3 as a prop into this component controls where it displays.
      pageMark: ["", "", "", ""],
      // menuItems are careated in order of the following array.
      menuItems: ["My Directory", "Community", "Forum", "Book a Trip"],
    };
  }

  // Sets the location of the triangle on the menu depending on prop.page
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

  clickHandler = () => {
    console.log("Clicked!")
  }

  componentWillMount() {
    this.setPageMarker();
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
              this.state.condensedMenuActive === false
                ? this.setState({ condensedMenu: "Navbar__show", pageMark: ["", "", "", ""] })
                : this.setState({ condensedMenu: "" });
            }}
            active={this.state.condensedMenuActive}
          />
        </div>
        <div className={`Navbar__main ${this.state.condensedMenu}`}>
          <div className="Navbar__menu">
            {/* Depending on various items in state, this renders the menu */}
            {this.state.menuItems.map((item, key) => (
              <div className="Navbar__link-item" key={key}>
                <NavLink
                  text={item}
                  to={"/"}
                  menuList={[]}
                />
                <div className={`Navbar__triangle ${this.state.pageMark[key]}`}></div>
              </div>
            ))}
          </div>
          <div className="Navbar__right">
            <Icon icon={"search"} size="2x" onClick={this.clickHandler} />
            <Icon icon={["far", "comment-dots"]} size="2x" onClick={this.clickHandler} />
            <ProfilePicture type="extra-small" to="/" image={this.props.profileImage} />
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
