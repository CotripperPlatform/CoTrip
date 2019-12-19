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
        <div className="TripDetails__carousel-container">
          <img
            className="TripDetails__image"
            src={this.props.images[this.state.imageIndex].src}
            alt={this.props.images[this.state.imageIndex].alt}
          />
          <div className="TripDetails__carousel">
            <CarouselDots
              numberOfDots={this.props.images.length}
              activeLocation={1}
              border
              onStatusChange={this.onClick}
            />
          </div>
        </div>
        <div className="TripDetails__information">
          <div className="TripDetails__container TripDetails__overview-container">
            <h2 className="TripDetails__title">Overview</h2>
            <p className="TripDetails__text">{this.props.overview}</p>
          </div>
          <div className="TripDetails__container TripDetails__dates-container">
            <h2 className="TripDetails__title">Dates</h2>
            <div className="TripDetails__dates-details">
              <p className="TripDetails__dates-text">
                {this.props.startDate}
                {" -"}
              </p>
              <p className="TripDetails__dates-text">{this.props.endDate}</p>
            </div>
          </div>
          <div className="TripDetails__container TripDetails__location-container">
            <h2 className="TripDetails__title">Location</h2>
            <p className="TripDetails__text">{this.props.location}</p>
          </div>
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
