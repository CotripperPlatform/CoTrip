import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';

let user131 = {
  userFirstName: 'Paula', 
  userSurname: 'Bannerman', 
  userPic: '../../../../assets/images/card_profile1.png'
}
let user465 = {
  userFirstName: 'Jack', 
  userSurname: 'Johnson', 
  userPic: '../../../../assets/images/card_profile2.png'
}
let user1 = {
  userFirstName: 'Jenny', 
  userSurname: 'Jones', 
  userPic: '../../../../assets/images/card_profile3.png'
}

storiesOf('Connections', module)
.add("User Connections", () => <Connections userViewing={true} users={[user1, user465, user131]}/>)
.add("Her Connections", () => <Connections userViewing={false} users/>)
.add("Members", () => <Connections />)
