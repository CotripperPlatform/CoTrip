import React, { Component } from "react";
import "./Pill.css";
import heartWhite from "./heart-white.svg";
import heartPink from "./heart-pink.svg";

// Class Based React Component
class Pill extends Component {
  constructor(props) {
    super(props);
    // Default CSS class to apply to the Component
    let classList = this.props.hasOwnProperty("active")
      ? this.togglePillColor(this.props.active)
      : this.assignStaticClassList();

    this.state = {
      classList: classList,
      active: this.props.active,
      selectId: props.selectId
    };
  }

  //Assign the base clasList before color and border have been applied
  assignBaseClassList = () => {
    let baseClass = "Pill";
    let size = ` Pill${this.props.size} `;
    let applyShadow = this.props.shadow ? " PillShadow " : " ";
    let classList = baseClass + size + applyShadow;
    return classList;
  };

  //Assigns the color needed for the component
  assignPillColor = color => {
    let applyColor = this.props.color ? `Pill${color} ` : " ";
    let applyBorder = this.props.border ? `PillBorder${this.props.color} ` : `Pill${color} `;
    let pillColor = this.props.border ? applyBorder : applyColor;
    return pillColor;
  };


  assignInactiveClassList = () => {
    let classList = this.assignBaseClassList();
    if (this.props.color === "Purple") {
      classList = classList + this.assignPillColor("Pink");
    }
    return classList;
  };

  assignStaticClassList = () => {
    let classList = this.assignBaseClassList() + this.assignPillColor(this.props.color);
    return classList;
  };

  togglePillColor = active => {
    let classList = active ? this.assignStaticClassList() : this.assignInactiveClassList();
    return classList;
  };

  pillClick = evt => {
    if (this.props.hasOwnProperty('active')) {
      let active = !this.state.active;
      this.setState(
        {
          classList: this.togglePillColor(active),
          active: active
        },
        () => {
          console.log(this.state);
          let output = {
            selectId: this.state.selectId,
            active: this.state.active
          };
          this.props.clickCallback(output);
        }
      );
    } else {
      let output = {
        selectId: this.state.selectId,
        active: this.state.active
      };
      this.props.clickCallback(output);
    }
  };

  renderHeart = () => {
    let iconClass = this.props.iconOffset ? "PillIcon PillIconOffset" : "PillIcon";
    let renderHeart = this.props.icon.toLowerCase() === "pink" ? heartPink : heartWhite;
    let img = <img src={renderHeart} className={iconClass}></img>;
    let render = this.props.icon ? img : <div />;
    return render;
  };

  render() {
    let conditionalIcon = this.props.icon ? this.renderHeart() : <div />;
    return (
      <div onClick={this.pillClick} className={this.state.classList}>
        {this.props.text}
        {conditionalIcon}
      </div>
    );
  }
}

export default Pill;
