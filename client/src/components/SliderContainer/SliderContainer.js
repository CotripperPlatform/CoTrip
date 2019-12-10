import React, { Component } from "react";
import "./SliderContainer.css";
import PropTypes from "prop-types";
import hawaii from "../../../../assets/images/hawaii.png";
import southernCaribbean from "../../../../assets/images/southernCaribbean.png";
import easternCaribbean from "../../../../assets/images/easternCaribbean.png";
import hawaiiTrees from "../../../../assets/images/hawaii-trees.png";
import westernCaribbean from "../../../../assets/images/westernCaribbean.png";

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_index: 0
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick = () => {
    this.setState({ image_index: (this.state.image_index + 1) % this.props.images.length });
  };
  render() {
    return (
      <div className="SliderContainer">
        <div className="SliderContainer__left">
          <img
            className="SliderContainer__image"
            src={this.props.images[this.state.image_index].url}
            alt={this.props.images[this.state.image_index].alt}
          />
          <button onClick={this.onClick}>...</button>
        </div>
        <div className="SliderContainer__right">
          <p className="SliderContainer__overview-title">Overview</p>
          <p className="SliderContainer__dates-title">Dates</p>
          <p className="SliderContainer__location-title">Location</p>
          <p className="SliderContainer__overview-text">{this.props.overview}</p>
          <div className="SliderContainer__dates-container">
            <p className="SliderContainer__dates-text">
              {this.props.start_date}
              {" -"}
            </p>
            <p className="SliderContainer__dates-text">{this.props.end_date}</p>
          </div>
          <p className="SliderContainer__location-text">{this.props.location}</p>
        </div>
      </div>
    );
  }
}

SliderContainer.defaultProps = {
  images: [
    { alt: "hawaii", url: hawaiiTrees },
    { alt: "hawaii", url: hawaii },
    { alt: "eastern caribbean", url: easternCaribbean },
    { alt: "western caribbean", url: westernCaribbean },
    { alt: "southern caribbean", url: southernCaribbean }
  ],
  overview:
    "Enjoy a week-long stay at a luxury resort! During your stay, explore the resort's amazing ammenities and events, but above all, explore the beautiful islands of Hawaii! It will be a trip for you and your family to remember forever.",
  start_date: "Sunday, May 17, 2020",
  end_date: "Monday, May 25, 2020",
  location: "Resort XYZ"
};
SliderContainer.propTypes = {
  images: PropTypes.array,
  overview: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  location: PropTypes.string
};
export default SliderContainer;
