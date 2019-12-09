import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from './MediaCard';
import books from '../../../../assets/images/media-card-1.png'
import happiness from '../../../../assets/images/media-card-2.png';
import van from '../../../../assets/images/media-card-3.png';
import nightSky from '../../../../assets/images/media-card-4.png';
import waterfall from '../../../../assets/images/media-card-5.png';
import flight from '../../../../assets/images/media-card-6.png';

storiesOf('MediaCard', module)
  .add("Books", () => <MediaCard imageSrc={books} userFirstName='User' />)
  .add("Happiness", () => <MediaCard imageSrc={happiness} userFirstName='User' />)
  .add("Van", () => <MediaCard imageSrc={van} userFirstName='User' />)
  .add("Night Sky", () => <MediaCard imageSrc={nightSky} userFirstName='User' />)
  .add("Waterfall", () => <MediaCard imageSrc={waterfall} userFirstName='User' />)
  .add("Flight", () => <MediaCard imageSrc={flight} userFirstName='User' />)
