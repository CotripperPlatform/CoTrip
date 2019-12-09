import React, {Component} from 'react';
import "./NavLinkDropdownMenu.css";
import { Redirect } from 'react-router-dom';

class NavLinkDropdownMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      classList: "NavLinkDropdownMenu"
    };
    this.routeTo = this.routeTo.bind(this);
  }
  // NEED to fix once routes are made
  routeTo(url) {
    return <Redirect to={url} />;
  }
  render(){
    return(
      <ul className={this.state.classList}>
        {this.props.menuList.map(li => 
          <li className={this.state.classList + '-li'} onClick={this.routeTo(li.url)}>
            {li.text}
          </li>
        )}
      </ul>
    );
  }
}

export default NavLinkDropdownMenu;