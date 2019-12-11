import React from 'react';
import { storiesOf } from '@storybook/react';
import ExtraUsers from './ExtraUsers';

let anArray = [1,2,4,9,3,8,1,7] //a placeholder array of given length

storiesOf('ExtraUsers', module)
  .add("4 Extra Users ", () => <ExtraUsers to='Inbox/Recipients' users={anArray}/>)
  .add("2 Extra Users", () => <ExtraUsers to='Inbox/Recipients' users={anArray.slice(0,6)}/>)
  .add("No Extra Users", () => <ExtraUsers to='Inbox/Recipients' users={anArray.slice(0,3)}/>)
