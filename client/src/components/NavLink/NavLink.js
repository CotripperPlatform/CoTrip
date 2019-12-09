import React from 'react';
import "./NavLink.css";
import NavLinkDropdownMenu from '../NavLinkDropdownMenu/NavLinkDropdownMenu';
import { Redirect } from 'react-router-dom';

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownState: 'dropdown-hide'
    }
    this.routeTo = this.routeTo.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }
  // NEED to fix once routes are made
  routeTo(url) {
    return <Redirect to={url} />;
  }
  showDropdown() {
    this.setState({
      dropdownState: 'dropdown-show'
    });
  }
  hideDropdown() {
    this.setState({
      dropdownState: 'dropdown-hide'
    });
  }
  render() {
    let classList = `NavLink`;
    return (
      <div className={classList} onClick={this.routeTo(this.props.url)} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
        {this.props.text}
        <div className={this.state.dropdownState}>
          <NavLinkDropdownMenu menuList={this.props.menuList} />
        </div>
      </div>
    );
  }
}

export default NavLink;
