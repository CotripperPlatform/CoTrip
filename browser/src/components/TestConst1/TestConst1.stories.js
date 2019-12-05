import React from 'react';
import { storiesOf } from '@storybook/react';

import TestConst1 from './TestConst1';


storiesOf('TestConst1', module)
    .add('TestConst1', () =>{
      return <TestConst1 />
    }
)
