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
    let index = parseInt(evt.target.id);
    this.setState({ activeLocation: index }, () => {
      this.props.onStatusChange(index);
    });
  };

  render() {
    let numberOfDots = this.props.numberOfDots;
    let activeLocation = this.state.activeLocation;
    let dots = [];
    for (let i = 1; i <= numberOfDots; i++) {
      let classList = "CarouselDot ";
      let dot = (
        <div
          key={i}
          id={i}
          onClick={this.handleClick}
          className={`CarouselDot ${
            this.props.hasOwnProperty("border") ? " CarouselDot__border " : ""
          } ${i == activeLocation ? " CarouselDot--active " : ""} `}
        />
      );
      dots.push(dot);
    }

    return (
      <div className={"CarouselDots"} style={this.state.style}>
        {dots}
      </div>
    );
  }
}

CarouselDots.defaultProps = {
  numberOfDots: 3,
  activeLocation: 0
}

export default CarouselDots;
