
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
          <div>
            <h3>User Profile</h3>
          </div>
          <div class="box">
            <div class="container-1">
              <span class="icon"><img src={Search}/></span>
              <input type="search" id="search" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinkHeader;
