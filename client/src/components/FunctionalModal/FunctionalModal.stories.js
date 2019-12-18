import React from 'react';
import { storiesOf } from '@storybook/react';
import FunctionalModal from './FunctionalModal';

storiesOf('FunctionalModal', module)
  .add("Follow Functional Modal", () => (
    <FunctionalModal 
    message={"Are you sure you want to follow"} 
    confirmText={"Confirm"} 
    cancelText={"Cancel"}/>
  ))
  .add("Join Functional Modal", () => (
    <FunctionalModal 
    message={"Are you sure you want to join"} 
    confirmText={"join"} 
    cancelText={"Cancel"}/>
  )
)

