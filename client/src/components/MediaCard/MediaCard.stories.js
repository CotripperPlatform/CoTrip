import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from './MediaCard';
import happiness from '../../../../assets/images/media-card-2.png';
import van from '../../../../assets/images/media-card-1.png'
// import space from '../../../../assets/images/card_medium3.png'

storiesOf('MediaCard', module)
  .add("Fun and Happiness", () => <MediaCard imageSrc={happiness} userFirstName='User'/>)
  .add("Van", () => <MediaCard imageSrc={van} userFirstName='User'/>)
  // .add("Space", () => <MediaCard imageSrc={space} userFirstName='User'/>)
