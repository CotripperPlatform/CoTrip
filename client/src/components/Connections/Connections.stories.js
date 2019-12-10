import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';
import pic1 from '../../../../assets/images/card_profile1.png'
import pic2 from '../../../../assets/images/card_profile2.png'
import pic3 from '../../../../assets/images/card_profile3.png'

let user1 = {
  userId: 1,
  userFirstName: 'Paula', 
  userSurname: 'Bannerman', 
  userPic: pic1
}
let user2 = {
  userId: 2,
  userFirstName: 'Jack', 
  userSurname: 'Johnson', 
  userPic: pic2
}
let user3 = {
  userId: 3,
  userFirstName: 'Jenny', 
  userSurname: 'Jones', 
  userPic: pic3
}
let user4 = {
  userId: 4,
  userFirstName: 'Joan', 
  userSurname: 'Rivers', 
  userPic: pic1
}
let user5 = {
  userId: 5,
  userFirstName: 'Freddy', 
  userSurname: 'Mercury', 
  userPic: pic2
}
let user6 = {
  userId: 5,
  userFirstName: 'Leslie', 
  userSurname: 'Knope', 
  userPic: pic3
}
let user7 = {
  userId: 7,
  userFirstName: 'Frank', 
  userSurname: 'Ocean', 
  userPic: pic1
}

storiesOf('Connections', module)
.add("User Connections", () => <Connections userViewing={true} users={[user1, user2, user3, user4, user5, user6, user7]}/>)
.add("Her Connections", () => <Connections userViewing={false} users={[user5, user1 , user3]}/>)
.add("Members", () => <Connections users={[user7, user4, user2, user1, user5]}/>)
