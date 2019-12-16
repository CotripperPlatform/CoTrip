import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripImage from './BookATripImage';

storiesOf('BookATripImage', module)
  .add("Default", () => <BookATripImage
    cards={[
      {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
      {"image": "greece", "url": "#", "description": "Greece & Croatia Cruise June 2020"},
      {"image": "southernCaribbean", "url": "#", "description": "Southern Caribbean Cruise July 2020"},
      {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
      {"image": "easternCaribbean", "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
    ]}
/>)