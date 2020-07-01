import React, { Component } from "react";
import "./Pill.css";
import heartWhite from "./heart-white.svg";
import heartPink from "./heart-pink.svg";

// Class Based React Component
class Pill extends Component {
  constructor(props) {
    super(props);
    // Default CSS class to apply to the Component
    this.state = {
      classList: "",
      active: this.props.active,
      selectId: props.selectId
    };
  }

  pillClick = evt => {
    if (this.props.hasOwnProperty("active")) {
      this.setState(
        {
          //classList: this.togglePillColor(!this.state.active),
          active: !this.state.active
        },
        this.provideOutput()
      );
    } else {
      this.provideOutput();
    }
  };

  provideOutput = () => {
    let output = {
      selectId: this.state.selectId,
      active: this.state.active
    };
    this.props.onClick(output);
  };

  renderHeart = () => {
    let iconClass = this.props.iconOffset ? "Pill--icon Pill--icon-offset" : "Pill--icon";
    let renderHeart = this.props.icon.toLowerCase() === "pink" ? heartPink : heartWhite;
    let img = <img src={renderHeart} className={iconClass}></img>;
    let render = this.props.icon ? img : <div />;
    return render;
  };

  render() {
    let hasBorder = this.props.hasOwnProperty("border");
    let hasShadow = this.props.hasOwnProperty("shadow");
    let hasToggle = this.props.hasOwnProperty("active");
    let classList = `Pill Pill--${this.props.size} ${hasShadow ? "Pill--shadow " : ""}`;
    let activeColor = hasBorder
      ? `Pill--border__${this.props.color} `
      : `Pill__${this.props.color} `;

    if (hasToggle) {
      let inactiveColor = `Pill__${this.props.inactiveColor}`;
      classList += this.state.active ? activeColor : inactiveColor;
    } else {
      classList += activeColor;
    }
    if (this.props.hasOwnProperty("onboarding")) {
      classList += " Pill--onboarding";
    }

    let conditionalIcon = this.props.icon ? this.renderHeart() : <div />;
    return (
      <div onClick={this.pillClick} className={classList}>
        {this.props.text}
        {conditionalIcon}
      </div>
    );
  }
}

Pill.defaultProps = {
  text: "Default",
  size: "large",
  color: "pink",
  inactiveColor: "red",
  selectId: 0,
  shadow: ""
};
export default Pill;
