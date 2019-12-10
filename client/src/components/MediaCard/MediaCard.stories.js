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
  .add("Books", () => <MediaCard size='small' to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard size='small' to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard size='small' to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard size='small' to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard size='small' to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard size='small' to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)

storiesOf('Medium Media Cards', module)
  .add("Default", () => <MediaCard />)
  .add("Books", () => <MediaCard size='medium' to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard size='medium' to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard size='medium' to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard size='medium' to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard size='medium' to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard size='medium' to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)
  
storiesOf('Large Media Cards', module)
  .add("Books", () => <MediaCard size='large' to='User/:userid/' imageSrc={books} footerText='Posted By: --user--' />)
  .add("Happiness", () => <MediaCard size='large' to='User/:userid/' imageSrc={happiness} footerText='Posted By: --user--' />)
  .add("Van", () => <MediaCard size='large' to='User/:userid/' imageSrc={van} footerText='Posted By: --user--' />)
  .add("Night Sky", () => <MediaCard size='large' to='User/:userid/' imageSrc={nightSky} footerText='Posted By: --user--' />)
  .add("Waterfall", () => <MediaCard size='large' to='User/:userid/' imageSrc={waterfall} footerText='Posted By: --user--' />)
  .add("Flight", () => <MediaCard size='large' to='User/:userid/' imageSrc={flight} footerText='Posted By: --user--' />)