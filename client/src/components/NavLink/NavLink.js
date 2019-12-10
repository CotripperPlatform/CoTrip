import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkDropdownMenu from '../NavLinkDropdownMenu/NavLinkDropdownMenu';
import "./NavLink.css";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    if (this.state.dropdownVisible) {
      this.setState({
        dropdownVisible: false
      });
    } else {
      if (this.props.menuList.length) {
        this.setState({
          dropdownVisible: true
        });
      }
    }
  }
  // NEED to fix Link to= once routes are made
  render() {
    return (
      <Link className='NavLink-Link' to={this.props.url}>
        <div className='NavLink' onMouseEnter={this.toggleDropdown} onMouseLeave={this.toggleDropdown}>
          <h1>{this.props.text}</h1>
          <div className={this.state.dropdownVisible ? 'dropdown-show' : 'dropdown-hide'}>
            <NavLinkDropdownMenu menuList={this.props.menuList} />
          </div>
        </div>
      </Link>
    );
  }
}

export default NavLink;
