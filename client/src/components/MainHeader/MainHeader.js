import React, { Component } from "react";
import "./MainHeader.css";
import Search from "./search@2x.png";
import "../../App.css";

// Class Based React Component
class Banner extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "MainHeader"
    };
  }

  render() {
    if (this.props.Groups) {
      return (
        <div className={this.state.classList}>
          <div className="box">
            <div className="header">
              <h3 className="header-text">Directory: My Groups</h3>
            </div>
            <div className="box2">
              <div className="container-1">
                <span className="icon">
                  <img src={Search} />
                </span>
                <input type="search" id="search" placeholder={this.props.placeholder} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.Friends) {
      return (
        <div className={this.state.classList}>
          <div className="box">
            <div className="header">
              <h3 className="header-text">Directory: My Friends</h3>
            </div>
            <div className="box2">
              <div className="container-1">
                <span className="icon">
                  <img src={Search} />
                </span>
                <input type="search" id="search" placeholder={this.props.placeholder} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.Trip) {
      return (
        <div className={this.state.classList}>
          <div className="box" style={{ marginTop: "75px" }}>
            <div className="header">
              <h3 className="header-text">Trip: {this.props.children}</h3>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.bookTrip) {
      return (
        <div className={this.state.classList}>
          <div className="box">
            <div className="header">
              <h3 className="header-text">Book a Trip</h3>
            </div>
            <div className="box2">
              <div className="container-1">
                <span className="icon">
                  <img src={Search} />
                </span>
                <input type="search" id="search" placeholder={this.props.placeholder} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={this.state.classList}>
        <div className="box">
          <div className="header">
            <h3 className="header-text">User Profile</h3>
          </div>
          <div className="box2">
            <div className="container-1">
              <span className="icon">
                <img src={Search} />
              </span>
              <input type="search" id="search" placeholder={this.props.placeholder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
