import React from 'react';
import { storiesOf } from '@storybook/react';
import InboxMessagePreview from './InboxMessagePreview';

storiesOf('InboxMessagePreview', module)
  .add("Default", () => (
    <InboxMessagePreview />
  )
)
