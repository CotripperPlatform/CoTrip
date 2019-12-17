import React from "react";
import { storiesOf } from "@storybook/react";
import BookTripCard from "./BookTripCard";
import TripCard from "../TripCard/TripCard";
import example1 from "../../assets/images/card_small2.png";
import example2 from "../../assets/images/Hawaii-resort.jpg";
import { tsPropertySignature } from "@babel/types";


storiesOf("BookTripCard", module).add("Default", () => (
  <BookTripCard>
    <h1>Book a Trip</h1>
    <TripCard src={example2} location="Hawaii" date="May 2020" />
    <TripCard src={example1} location="Puerto Rico" date="April 2019" />
  </BookTripCard>
));
