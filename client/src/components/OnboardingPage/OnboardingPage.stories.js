import React from 'react';
import { storiesOf } from '@storybook/react';
import OnboardingPage from './OnboardingPage';

storiesOf('OnboardingPage', module)
  .add("Default", () => (
    <OnboardingPage />
  )
)
