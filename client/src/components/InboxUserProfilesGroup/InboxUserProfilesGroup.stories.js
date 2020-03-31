import React from 'react';
import { storiesOf } from '@storybook/react';
import InboxUserProfilesGroup from './InboxUserProfilesGroup';

storiesOf('InboxUserProfilesGroup', module)
  .add("Default", () => (
    <InboxUserProfilesGroup />
  )
)
