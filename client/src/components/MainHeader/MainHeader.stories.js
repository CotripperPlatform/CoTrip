import React from "react";
import { storiesOf } from "@storybook/react";
import MainHeader from "./MainHeader";

storiesOf("MainHeader", module)
  .add("Search my Directory ", () => <MainHeader placeholder="Search My Directory" type="search" />)
  .add("Book a Trip", () => <MainHeader bookTrip placeholder="Search Trips" />)
  .add("Trip", () => <MainHeader Trip />)
  .add("Directory: My Friends", () => <MainHeader Friends placeholder="Search My Directory" />)
  .add("Directory: My Groups", () => <MainHeader Groups placeholder="Search My Directory" />);
