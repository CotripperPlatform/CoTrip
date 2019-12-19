import React from 'react';
import { storiesOf } from '@storybook/react';
import Hawaii2020 from './Hawaii2020';

storiesOf('Hawaii2020', module)
  .add("Hawaii2020", () => (
    <Hawaii2020 
      trip={Hawaii2020}
    />
  )
)
