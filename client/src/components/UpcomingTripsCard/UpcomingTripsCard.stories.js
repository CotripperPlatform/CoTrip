import React from 'react';
import { storiesOf } from '@storybook/react';
import UpcomingTripsCard from './UpcomingTripsCard';
import background from "../../assets/images/card_small2.png";

storiesOf('UpcomingTripsCard', module)
  .add("Default", () => (
    <UpcomingTripsCard
      details={["Detail 1", "Detail 2", "Detail 3", "Detail 4"]}
      url="#"
      src={background}
      location="Location"
      date="Date"
    />
  ))
  .add("Example", () => (
    <UpcomingTripsCard
      details={["3 Days, 2 Nights", "Resort Stay", "Children Welcome", "Guided Tours"]}
      url="#"
      src={background}
      location="Hawaii"
      date="2020"
    />
  ));