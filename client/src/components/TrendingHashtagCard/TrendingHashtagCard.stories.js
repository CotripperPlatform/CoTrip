import React from 'react';
import { storiesOf } from '@storybook/react';
import TrendingHashtagCard from './TrendingHashtagCard';

storiesOf('TrendingHashtagCard', module)
  .add("Default", () => (
    <TrendingHashtagCard />
  )
)
