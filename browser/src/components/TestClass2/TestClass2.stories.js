import React from 'react';
import { storiesOf } from '@storybook/react';

import TestClass2 from './TestClass2';


storiesOf('TestClass2', module)
    .add('TestClass2', () =>{
      return <TestClass2 />
    }
)
