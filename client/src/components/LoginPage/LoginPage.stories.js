import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginPage from './LoginPage';

storiesOf('LoginPage', module)
  .add("Default", () => (
    <LoginPage />
  )
)
