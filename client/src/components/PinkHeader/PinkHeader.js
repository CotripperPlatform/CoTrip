
import React, { Component } from 'react';
import "./PinkHeader.css";
import Search from "./search@2x.png"


// Class Based React Component
class PinkHeader extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "PinkHeader"
    };
  }

  render() {
    return (
      <div className={this.state.classList}>
        <div className="box">
          <div className="header">
            <h3>User Profile</h3>
          </div>
          <div className="box2">
            <div className="container-1">
              <span className="icon"><img src={Search}/></span>
              <input type="search" id="search" placeholder={this.props.placeholder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinkHeader;
