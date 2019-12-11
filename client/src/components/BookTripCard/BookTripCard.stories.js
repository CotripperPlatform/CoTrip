import React from "react";
import { storiesOf } from "@storybook/react";
import BookTripCard from "./BookTripCard";
import { Route } from "@storybook/router";
import { checkPropTypes } from "prop-types";

storiesOf("BookTripCard", module).add("Default", () => (
  <BookTripCard>
    <h1>Book a Trip</h1>
    <img src="https://www.placecage.com/200/300"></img>
    <img src="https://www.placecage.com/200/300"></img>
    <h3 to="/route">Book a Trip Now!</h3>
  </BookTripCard>
));
