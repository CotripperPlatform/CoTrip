import React from 'react';
import { storiesOf } from '@storybook/react';
import UpcomingTripsCard from './UpcomingTripsCard';

storiesOf('UpcomingTripsCard', module)
  .add("Default", () => <UpcomingTripsCard 
    header="Upcoming Trips"
    details={["Detail 1", "Detail 2", "Detail 3", "Detail 4"]}
    url="#"
    linkText="More Details"
  />)
  .add("Example", () => <UpcomingTripsCard 
    header="Upcoming Trips"
    details={["3 Days, 2 Nights", "Resort Stay", "Children Welcome", "Guided Tours"]}
    url="#"
    linkText="More Details"
  />)
