import React, { Component } from "react";
import "./TripDetails.css";
import PropTypes from "prop-types";
import hawaii from "../../assets/images/hawaii.png";
import southernCaribbean from "../../assets/images/southernCaribbean.png";
import easternCaribbean from "../../assets/images/easternCaribbean.png";
import hawaiiTrees from "../../assets/images/hawaii-trees.png";
import greece from "../../assets/images/greece.png";
import CarouselDots from "../CarouselDots/CarouselDots.js";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
  }
  onClick = () => {
    this.setState({ imageIndex: (this.state.imageIndex + 1) % this.props.images.length });
  };
  render() {
    return (
      <div className="TripDetails">
        <div className="TripDetails__left">
          <img
            className="TripDetails__image"
            src={this.props.images[this.state.imageIndex].src}
            alt={this.props.images[this.state.imageIndex].alt}
          />
          <div className="TripDetails__carousel-container">
            <CarouselDots
              numberOfDots={this.props.images.length}
              activeLocation={1}
              border
              onStatusChange={this.onClick}
            />
          </div>
        </div>
        <div className="TripDetails__right">
          <h2 className="TripDetails__overview-title">Overview</h2>
          <p className="TripDetails__overview-text">{this.props.overview}</p>
          <h2 className="TripDetails__dates-title">Dates</h2>
          <div className="TripDetails__dates-container">
            <p className="TripDetails__dates-text">
              {this.props.startDate}
              {" -"}
            </p>
            <p className="TripDetails__dates-text">{this.props.endDate}</p>
          </div>
          <h2 className="TripDetails__location-title">Location</h2>
          <p className="TripDetails__location-text">{this.props.location}</p>
        </div>
      </div>
    );
  }
}

TripDetails.defaultProps = {
  images: [
    { alt: "hawaii", src: hawaiiTrees },
    { alt: "hawaii", src: hawaii },
    { alt: "eastern caribbean", src: easternCaribbean },
    { alt: "greece", src: greece },
    { alt: "southern caribbean", src: southernCaribbean }
  ],
  overview:
    "Enjoy a week-long stay at a luxury resort! During your stay, explore the resort's amazing ammenities and events, but above all, explore the beautiful islands of Hawaii! It will be a trip for you and your family to remember forever.",
  startDate: "Sunday, May 17, 2020",
  endDate: "Monday, May 25, 2020",
  location: "Resort XYZ"
};
TripDetails.propTypes = {
  images: PropTypes.array,
  overview: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string
};
export default TripDetails;
