import React, { Component } from "react";
import "./ButtonSelect.css";
import heartWhite from './heart-white.svg';
import heartPink from './heart-pink.svg';
class ButtonSelect extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.configureButtonColor(this.props.color);

    // Default CSS class to apply to the Component
    if(this.props.active){
      this.configureToggle(props);
    }else{
      this.state = {
        classList: this.configureButtonColor(),
        style: {
          backgroundColor: this.props.unselectedColor,
          width: props.width
        },
        selectId: props.selectId
      };
    }

  }

  configureButtonColor=()=>{
    return `ButtonSelect ButtonIconShadow ButtonSelect${this.props.size} ButtonSelect${this.props.color}`
  }

  toggleButtonColor=(active)=>{
    let size = this.props.size;
    size = this.props.color === 'Purple' ? size += ` ButtonSelectPink` : size;
    if(active===true){
      return `ButtonSelect ButtonIconShadow ButtonSelect${this.props.size} ButtonSelect${this.props.color}`
    }else{
      return `ButtonSelect ButtonIconShadow ButtonSelect${size}`
    }
  }

  configureToggle=(props)=>{
    this.state = {
      classList: this.configureButtonColor(this.props.active),
      active: this.props.active,
      style: {
        width: props.width
      },
      selectId: props.selectId
    };
  }


  toggleClick=(evt)=>{
    console.log("Toggling")
    let active = !this.state.active;
    let selectedColor = this.props.selectedColor;
    let unselectedColor = this.props.unactiveColor;
    console.log(active, selectedColor, unselectedColor);
    this.setState(
      {
        classList: this.toggleButtonColor(active),
        active: active,
        style: {
          width: this.props.width
        }
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
  }

  pillClicked = (evt) => {
    if(this.props.active){
      this.toggleClick(evt);
    }else{
      this.props.clickCallback("cool");
    }
  };

  renderWithHeart=()=>{
    let iconClass = this.props.iconOffset ? 'ButtonIcon ButtonIconOffset' : 'ButtonIcon';
    let renderHeart = this.props.icon === 'pink' ? heartPink : heartWhite;
    return <div onClick={this.pillClicked} className={this.state.classList} style={this.state.style}>
      {this.props.text}
      <img src={renderHeart} className={iconClass}></img>
    </div>
  };

  renderWithoutHeart=()=>{
    return <div onClick={this.pillClicked} className={this.state.classList} style={this.state.style}>
      {this.props.text}
    </div>
  };

  render() {
    let component = this.props.icon ? this.renderWithHeart() : this.renderWithoutHeart();
    return component;
  }
}

export default ButtonSelect;
