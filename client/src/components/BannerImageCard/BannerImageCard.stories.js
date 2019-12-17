import React from 'react';
import { storiesOf } from '@storybook/react';
import BannerImageCard from './BannerImageCard';

storiesOf('BannerImageCard', module)
  .add("Default", () => (
    <BannerImageCard/>
  )
)
