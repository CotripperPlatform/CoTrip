import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from './MediaCard';
import happiness from './enjoyment-fun-happiness-2101528.png';

storiesOf('MediaCard', module)
  .add("Fun and Happiness", () => (
    <MediaCard imageSrc={happiness} userFirstName='Paula'/>
  )
)
