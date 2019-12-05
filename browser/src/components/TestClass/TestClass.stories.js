import React from 'react';
import { storiesOf } from '@storybook/react';

import TestClass from './TestClass';


storiesOf('TestClass', module)
    .add('TestClass', () =>{
      return <TestClass />
    }
)
