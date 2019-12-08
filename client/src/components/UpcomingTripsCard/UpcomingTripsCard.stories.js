import React from 'react';
import { storiesOf } from '@storybook/react';
import UpcomingTripsCard from './UpcomingTripsCard';

storiesOf('UpcomingTripsCard', module)
  .add("Default", () => <UpcomingTripsCard 
    header="Upcoming Trips"
    detailOne="3 Days, 2 Nights"
    detailTwo="Resort Stay"
    detailThree="Children Welcome"
    detailFour="Guided Tours"
    url="#"
    linkName="More Details"
  />)
