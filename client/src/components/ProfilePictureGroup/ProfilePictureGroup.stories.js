import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfilePictureGroup from './ProfilePictureGroup';

storiesOf('ProfilePictureGroup', module)
  .add("Default", () => (
    <ProfilePictureGroup />
  )
)
