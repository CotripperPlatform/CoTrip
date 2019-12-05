import React from 'react';
import { storiesOf } from '@storybook/react';

import TestClass1 from './TestClass1';


storiesOf('TestClass1', module)
    .add('TestClass1', () =>{
      return <TestClass1 />
    }
)
