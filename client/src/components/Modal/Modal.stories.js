import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

storiesOf('Modal', module)
  .add("Follow Modal", () => 
    <Modal/>
  )
  .add("Join Modal", () =>
    <Modal
      join/>
  ) 