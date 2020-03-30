import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberProfilePage from './MemberProfilePage';

storiesOf('MemberProfilePage', module)
  .add("Default", () => (
    <MemberProfilePage />
  )
)
