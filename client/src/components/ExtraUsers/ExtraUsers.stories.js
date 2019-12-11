import React from 'react';
import { storiesOf } from '@storybook/react';
import ExtraUsers from './ExtraUsers';

let anArray = [1,2,4,9,3,8,1,7,9,13,1,24]

storiesOf('ExtraUsers', module)
  .add("Default", () => (
    <ExtraUsers to='Inbox/Recipients' users={anArray}/>
  )
)
