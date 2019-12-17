import React from 'react';
import { storiesOf } from '@storybook/react';
import BannerImageCard from './BannerImageCard';
import Banner__Image from "./TripBanner.png";

storiesOf('BannerImageCard', module)
  .add("Default", () => (
    <BannerImageCard background={Banner__Image}/>
  )
)
