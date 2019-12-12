import React from "react";
import { storiesOf } from "@storybook/react";
import BookTripCard from "./BookTripCard";
import { Route } from "@storybook/router";
import { checkPropTypes } from "prop-types";
import TripCard from "../TripCard/TripCard";
import example1 from "../../assets/images/card_small2.png";

storiesOf("BookTripCard", module).add("Default", () => (
  <BookTripCard>
    <h1>Book a Trip</h1>
    <TripCard src="https://wallpaperaccess.com/full/144067.jpg" location="Hawaii" date="May 2020" />
    <TripCard src={example1} location="Puerto Rico" date="April 2019" />
    <h3 to="/route">Book a Trip Now!</h3>
  </BookTripCard>
));
