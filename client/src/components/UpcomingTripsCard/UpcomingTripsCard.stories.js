import React from 'react';
import { storiesOf } from '@storybook/react';
import UpcomingTripsCard from './UpcomingTripsCard';

storiesOf('UpcomingTripsCard', module)
  .add("Default", () => <UpcomingTripsCard 
    header="Upcoming Trips"
    details={["3 Days, 2 Nights", "Resort Stay", "Children Welcome", "Guided Tours"]}
    // detailOne="3 Days, 2 Nights"
    // detailTwo="Resort Stay"
    // detailThree="Children Welcome"
    // detailFour="Guided Tours"
    url="#"
    linkText="More Details"
  />)
