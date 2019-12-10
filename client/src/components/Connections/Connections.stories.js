import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';



storiesOf('Connections', module)
.add("User Connections", () => <Connections userViewing={true} />)
.add("Her Connections", () => <Connections userViewing={false} />)
.add("Members", () => <Connections />)
