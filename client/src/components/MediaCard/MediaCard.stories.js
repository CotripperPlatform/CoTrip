import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from './MediaCard';
import books from '../../../../assets/images/media-card-1.png'
import happiness from '../../../../assets/images/media-card-2.png';
import van from '../../../../assets/images/media-card-3.png';
import nightSky from '../../../../assets/images/media-card-4.png';
import waterfall from '../../../../assets/images/media-card-5.png';
import flight from '../../../../assets/images/media-card-6.png';

storiesOf('Small Media Cards', module)
  .add("Books", () => <MediaCard small imageSrc={books} userFirstName='User' />)
  .add("Happiness", () => <MediaCard small imageSrc={happiness} userFirstName='User' />)
  .add("Van", () => <MediaCard small imageSrc={van} userFirstName='User' />)
  .add("Night Sky", () => <MediaCard small imageSrc={nightSky} userFirstName='User' />)
  .add("Waterfall", () => <MediaCard small imageSrc={waterfall} userFirstName='User' />)
  .add("Flight", () => <MediaCard small imageSrc={flight} userFirstName='User' />)

storiesOf('Medium Media Cards', module)
  .add("Books", () => <MediaCard medium imageSrc={books} userFirstName='User' />)
  .add("Happiness", () => <MediaCard medium imageSrc={happiness} userFirstName='User' />)
  .add("Van", () => <MediaCard medium imageSrc={van} userFirstName='User' />)
  .add("Night Sky", () => <MediaCard medium imageSrc={nightSky} userFirstName='User' />)
  .add("Waterfall", () => <MediaCard medium imageSrc={waterfall} userFirstName='User' />)
  .add("Flight", () => <MediaCard medium imageSrc={flight} userFirstName='User' />)
  
storiesOf('Large Media Cards', module)
  .add("Books", () => <MediaCard large imageSrc={books} userFirstName='User' />)
  .add("Happiness", () => <MediaCard large imageSrc={happiness} userFirstName='User' />)
  .add("Van", () => <MediaCard large imageSrc={van} userFirstName='User' />)
  .add("Night Sky", () => <MediaCard large imageSrc={nightSky} userFirstName='User' />)
  .add("Waterfall", () => <MediaCard large imageSrc={waterfall} userFirstName='User' />)
  .add("Flight", () => <MediaCard large imageSrc={flight} userFirstName='User' />)