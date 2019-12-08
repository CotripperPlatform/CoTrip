import React from 'react';
import { storiesOf } from '@storybook/react';
import PinkHeader from './PinkHeader';

storiesOf('PinkHeader', module)
  .add("Search my Directory ", () => (
    <PinkHeader 
        placeholder="Search My Directory" 
        type="search"/>
  ))
  .add("Book a Trip", () => (
    <PinkHeader
        bookTrip
        placeholder="Search Trips"/>
  ))
  .add("Trip", () => (
    <PinkHeader
        Trip/>
  ))
  .add("Directory: My Friends", () => (
    <PinkHeader
        Friends
        placeholder="Search My Directory"/>
  ))
  .add("Directory: My Groups", () => (
    <PinkHeader
        Groups
        placeholder="Search My Directory"/>
  ))
