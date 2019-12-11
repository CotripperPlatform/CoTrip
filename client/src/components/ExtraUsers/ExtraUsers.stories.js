import React from 'react';
import { storiesOf } from '@storybook/react';
import ExtraUsers from './ExtraUsers';

let anArray = [1,2,4,9,3,8,1,7] //a placeholder array of given length

storiesOf('ExtraUsers', module)
  .add("Extra Users Element", () => (
    <ExtraUsers to='Inbox/Recipients' users={anArray}/>
  )
)
