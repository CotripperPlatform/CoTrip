import React from 'react';
import { storiesOf } from '@storybook/react';
import InputTextField from './InputTextField';

storiesOf('InputTextField', module)
  .add("Default", () => (
    <InputTextField />
  )
)
