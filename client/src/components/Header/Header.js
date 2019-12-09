import React, { Component } from "react";
import "./Header.css";
import homeBanner from "../../../../assets/images/home_banner.png";
import passportPinkBanner from "./passport_pink_banner.png";
import passportPurpleBanner from "./passport_purple_banner.png";

// import url from "@storybook/api/dist/modules/url";

// Class Based React Component
class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Header"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}
  // no-repeat center center fixed
  render() {
    const styleHome = {
      backgroundImage: "url(" + homeBanner + ")",
      width: "120vw",
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "5vh"
    };
    const stylePassportPink = {
      backgroundImage: "url(" + passportPinkBanner + ")",
      width: "120vw",
      height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "5vh"
    };
    const stylePassportPurple = {
      backgroundImage: "url(" + passportPurpleBanner + ")",
      width: "120vw",
      height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "5vh"
    };
    if (this.props.home) {
      return (
        <div className={this.state.classList} style={styleHome}>
          <h1>Welcome {this.props.name}!</h1>
        </div>
      );
    } else if (this.props.passport && this.props.pink) {
      return <div className={this.state.classList} style={stylePassportPink}></div>;
    } else if (this.props.passport && this.props.purple) {
      return <div className={this.state.classList} style={stylePassportPurple}></div>;
    } else {
      return (
        <div className={this.state.classList}>
          Header <img src={homeBanner} alt="" />
        </div>
      );
    }
  }
}

export default Header;
