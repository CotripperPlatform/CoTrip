import React from "react";
import { Link } from "react-router-dom";
import NavLinkDropdownMenu from "../NavLinkDropdownMenu/NavLinkDropdownMenu";
import "./NavLink.css";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    if (this.props.menuList.length) {
      this.setState({
        dropdownVisible: !this.state.dropdownVisible
      });
    }
  }
  render() {
    if (this.props.text === "Community") {
      return (
        <div
          className="NavLink"
          onMouseEnter={this.toggleDropdown}
          onMouseLeave={this.toggleDropdown}
        >
          <Link to={this.props.to}>
            <h1>{this.props.text}</h1>
          </Link>

          <div
            className={
              this.state.dropdownVisible
                ? "NavLink__dropdown NavLink__dropdown-show"
                : "NavLink__dropdown"
            }
          >
            <NavLinkDropdownMenu menuList={this.props.menuList.length ? this.props.menuList : []} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="NavLink">
            <Link to={this.props.to}>
              <h1>{this.props.text}</h1>
            </Link>

            <div
              className={
                this.state.dropdownVisible
                  ? "NavLink__dropdown NavLink__dropdown-show"
                  : "NavLink__dropdown"
              }
            ></div>
          </div>
        </div>
      );
    }
  }
}
NavLink.defaultProps = {
  text: "Community",
  to: "/community/",
  menuList: [
    {
      text: "Explore People",
      to: "/community/explore-people"
    },
    {
      text: "Join Groups",
      to: "/community/join-groups"
    }
  ]
};

export default NavLink;
