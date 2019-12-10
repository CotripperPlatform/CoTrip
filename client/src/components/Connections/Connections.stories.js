import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';

let user00131 = {
  userFirstName: 'Paula', 
  userSurname: 'Bannerman', 
  userPic: '../../../../assets/images/card_profile1.png'
}
let user00465 = {
  userFirstName: 'Jack', 
  userSurname: 'Johnson', 
  userPic: '../../../../assets/images/card_profile2.png'
}
let user00001 = {
  userFirstName: 'Jenny', 
  userSurname: 'Jones', 
  userPic: '../../../../assets/images/card_profile3.png'
}
let user00001 = {
  userFirstName: 'Joan', 
  userSurname: 'Rivers', 
  userPic: '../../../../assets/images/card_profile3.png'
}
let user00001 = {
  userFirstName: 'Freddy', 
  userSurname: 'Mercury', 
  userPic: '../../../../assets/images/card_profile3.png'
}
let user00001 = {
  userFirstName: 'Leslie', 
  userSurname: 'Knope', 
  userPic: '../../../../assets/images/card_profile3.png'
}
let user00001 = {
  userFirstName: 'Frank', 
  userSurname: 'Ocean', 
  userPic: '../../../../assets/images/card_profile3.png'
}

storiesOf('Connections', module)
.add("User Connections", () => <Connections userViewing={true} users={[user1, user465, user131]}/>)
.add("Her Connections", () => <Connections userViewing={false} users={[user465, user1 , user131]}/>)
.add("Members", () => <Connections />)
