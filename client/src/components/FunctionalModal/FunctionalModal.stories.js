import React from 'react';
import { storiesOf } from '@storybook/react';
import FunctionalModal from './FunctionalModal';

storiesOf('FunctionalModal', module)
  .add("Default", () => (
    <FunctionalModal />
  )
)
