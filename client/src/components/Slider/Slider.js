import React, { Component } from "react";
import "./Slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: 3,
      beg: 0
    };
    this.cards = this.props.children;
    this.cardDisplayed = this.cards.slice(`${this.state.beg}`, `${this.state.end}`);
    this.lastCard = this.cardDisplayed[this.cardDisplayed.length - 1];
    this.lastItem = this.cards[this.cards.length - 1];
    this.firstCard = this.cardDisplayed[0];
    this.firstItem = this.cards[0];
  }

  componentDidMount() {
    console.log(this.props);
  }
  nextCard = () => {
    if (this.lastCard === this.lastItem) {
      console.log("stop");
    } else {
      this.setState({
        end: this.state.end + 1,
        beg: this.state.beg + 1
      });
    }
  };

  previousCard = () => {
    if (this.firstCard === this.firstItem) {
      console.log("stop");
    } else {
      this.setState({
        end: this.state.end - 1,
        beg: this.state.beg - 1
      });
    }
  };
  render() {
    return (
      <>
        <div className="Slider">
          <div className="Arrow Arrow__Prev" onClick={this.previousCard}></div>
          <div className="Slider__Cards ">{this.cardDisplayed}</div>
          <div className="Arrow Arrow__Next" onClick={this.nextCard}></div>
        </div>
      </>
    );
  }
}
