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

  dotClicked = evt => {
    let index = evt.target.id;
    this.setState({ activeLocation: index }, () => {
      this.props.onStatusChange(index);
    });
  };

  componentWillUnmount() {}

  generateClassList(active) {
    let classList = "CarouselDot ";
    classList = this.props.hasOwnProperty("border")
      ? (classList += " CarouselDot__Border ")
      : classList;
    classList = active ? (classList += "CarouselDot__Active ") : classList;
    return classList;
  }


  render() {
    let numberOfDots = this.props.numberOfDots;
    let activeLocation = this.state.activeLocation;
        let dots = [];
    for (let i = 0; i <= numberOfDots-1; i++) {
      let dot = <div key={i} id={i} onClick={this.dotClicked} className={this.generateClassList(i==activeLocation)} />
      dots.push(dot);
    }

    return (
      <div className={this.state.classList} style={this.state.style}>
        {dots}
      </div>
    );
  }
}

export default CarouselDots;
