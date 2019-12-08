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
