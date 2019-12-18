import React from 'react';
import { storiesOf } from '@storybook/react';
import BookATripImage from './BookATripImage';
import image1 from "../../assets/images/hawaii.png";
import image2 from "../../assets/images/greece.png";
import image3 from "../../assets/images/southernCaribbean.png";
import image4 from "../../assets/images/easternCaribbean.png";

storiesOf('BookATripImage', module)
  .add("Default", () => <BookATripImage
    cards={[
      {"image": image1, "url": "#", "description": "Hawaii May 2020"},
      {"image": image2, "url": "#", "description": "Greece & Croatia Cruise June 2020"},
      {"image": image3, "url": "#", "description": "Southern Caribbean Cruise July 2020"},
      {"image": image1, "url": "#", "description": "Hawaii August 2020"},
      {"image": image4, "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
    ]}
/>)
