import React from "react";
import { storiesOf } from "@storybook/react";
import UpcomingEventsCard from "./UpcomingEventsCard";

export default {
  title: "Cards/UpcomingEventsCard"
};

storiesOf("Cards/UpcomingEventsCard", module)
  .add("Default", () => (
    <UpcomingEventsCard name="Upcoming Event" date="Month Day" time="Time" location="City, State" />
  ))
  .add("Example", () => (
    <UpcomingEventsCard
      name="DC Mom Playdates"
      date="August 24th"
      time="4:30pm"
      location="Washington, DC"
    />
  ));
