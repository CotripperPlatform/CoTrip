import React, { Component } from "react";
import "./CarouselDots.css";
import ReactDOM from "react-dom";

class CarouselDots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: "CarouselDots",
      activeLocation: props.activeLocation
    };
  }

  handleClick = evt => {
    let index = evt.target.id;
    this.setState({ activeLocation: index }, () => {
      console.log("Index is :", index)
      this.props.onStatusChange(index);
    });
  };

  generateClassList(active) {
    let classList = "CarouselDot ";
    classList = this.props.hasOwnProperty("border")
      ? (classList += " CarouselDot__border ")
      : classList;
    classList = active ? (classList += "CarouselDot--active ") : classList;
    return classList;
  }

  render() {
    let numberOfDots = this.props.numberOfDots;
    let activeLocation = this.state.activeLocation;
    console.log(activeLocation);
    let dots = [];
    for (let i = 1; i <= numberOfDots; i++) {
      let classList = 'CarouselDot ';
      console.log('Location :', activeLocation, i===activeLocation)
      let dot = (
        <div
          key={i}
          id={i}
          onClick={this.handleClick}
          className={`CarouselDot ${this.props.hasOwnProperty('border') ? ' CarouselDot__border ' : ''} ${i==activeLocation ? ' CarouselDot--active ' : ''} `}
        />
      );
      dots.push(dot);
    }

    return (
      <div className={'CarouselDots'} style={this.state.style}>
        {dots}
      </div>
    );
  }
}

export default CarouselDots;
