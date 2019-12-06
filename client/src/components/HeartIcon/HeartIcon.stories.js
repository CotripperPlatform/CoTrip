import React from 'react';
import { storiesOf } from '@storybook/react';
import HeartIcon from './HeartIcon';
import Hearty from './HeartIcon.png';
import Heartyy from './HeartIconBlack.png';
import Heartyyy from './HeartIconPink.png';

storiesOf('HeartIcon', module)
.add('Heart Icon', () => <HeartIcon type="hearty"icon={Hearty}/>)
.add('Heart Icon Black', () => <HeartIcon type="hearty"icon={Heartyy}/>)
.add('Heart Icon Pink', () => <HeartIcon type="hearty"icon={Heartyyy}/>)
