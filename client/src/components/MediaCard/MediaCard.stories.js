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
  .add("Books", () => <MediaCard small to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard small to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard small to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard small to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard small to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard small to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)

storiesOf('Medium Media Cards', module)
  .add("Books", () => <MediaCard medium to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard medium to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard medium to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard medium to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard medium to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard medium to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)
  
storiesOf('Large Media Cards', module)
  .add("Books", () => <MediaCard large to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard large to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard large to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard large to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard large to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard large to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)