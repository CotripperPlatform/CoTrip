import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripImage from './BookATripImage';

storiesOf('BookATripImage', module)
  .add("Default", () => <BookATripImage
    cards={[
      {"image": "../../assets/images/hawaii.png", "url": "#", "description": "Hawaii May 2020"},
      {"image": "../../assets/images/greece.png", "url": "#", "description": "Greece & Croatia Cruise June 2020"},
      {"image": "../../assets/images/southernCaribbean.png", "url": "#", "description": "Southern Caribbean Cruise July 2020"},
      {"image": "../../assets/images/hawaii.png", "url": "#", "description": "Hawaii August 2020"},
      {"image": "../../assets/images/easternCaribbean.png", "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
    ]}
/>)