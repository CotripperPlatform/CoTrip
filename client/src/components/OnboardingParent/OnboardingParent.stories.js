import React from 'react';
import { storiesOf } from '@storybook/react';
import OnboardingParent from './OnboardingParent';

storiesOf('OnboardingParent', module)
  .add("Default", () => (
    <OnboardingParent />
  )
)
