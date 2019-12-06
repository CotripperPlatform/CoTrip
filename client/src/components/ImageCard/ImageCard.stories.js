import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageCard from './ImageCard';

storiesOf('ImageCard', module)
  .add("Default", () => (
    <ImageCard />
  )
)
