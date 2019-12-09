import React, { Component } from "react";
import "./SliderContainer.css";
// remove this later
import "../../App.css";

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_index: 0
    };
  }

  render() {
    // setInterval(() => {
    //   let picIndex = this.state.image_index;
    //   this.setState({ image_index: (picIndex + 1) % this.props.images.length });
    // }, 3000);
    return (
      <div className="SliderContainer">
        <div className="slider-container-left">
          <img
            className="slider-image"
            src={this.props.images[this.state.image_index].url}
            alt={this.props.images[this.state.image_index].alt}
          />
          <button>...</button>
        </div>

        <p className="slider-overview-title">Overview</p>
        <p className="slider-dates-title">Dates</p>
        <p className="slider-location-title">Location</p>
        <p className="slider-overview-text">{this.props.overview}</p>
        <div className="slider-dates-text">
          <p>
            {this.props.start_date}
            {" -"}
          </p>
          <p>{this.props.end_date}</p>
        </div>
        <p className="slider-location-text">{this.props.location}</p>
      </div>
    );
  }
}

SliderContainer.defaultProps = {
  images: [
    { alt: "phil murray", url: "https://www.fillmurray.com/200/300" },
    { alt: "phil", url: "https://www.fillmurray.com/g/200/300" },
    { alt: "fill", url: "https://www.fillmurray.com/200/300" }
  ],
  overview:
    "Enjoy a week-long stay at a luxury resort! During your stay, explore the resort's amazing ammenities and events, but above all, explore the beautiful islands of Hawaii! It will be a trip for you and your family to remember forever.",
  start_date: "Sunday, May 17, 2020",
  end_date: "Monday, May 25, 2020",
  location: "Resort XYZ"
};
export default SliderContainer;
