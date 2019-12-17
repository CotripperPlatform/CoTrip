import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';
import pic1 from '../../assets/images/card_profile1.png'
import pic2 from '../../assets/images/card_profile2.png'
import pic3 from '../../assets/images/card_profile3.png'

let testUsers =
  [{
    userId: 1,
    userFirstName: 'Paula',
    userSurname: 'Bannerman',
    userPic: pic1
  },
  {
    userId: 2,
    userFirstName: 'Jack',
    userSurname: 'Johnson',
    userPic: pic2
  },
  {
    userId: 3,
    userFirstName: 'Jenny',
    userSurname: 'Jones',
    userPic: pic3
  },
  {
    userId: 4,
    userFirstName: 'Joan',
    userSurname: 'Rivers',
    userPic: pic1
  },
  {
    userId: 5,
    userFirstName: 'Freddy',
    userSurname: 'Mercury',
    userPic: pic2
  },
  {
    userId: 5,
    userFirstName: 'Leslie',
    userSurname: 'Knope',
    userPic: pic3
  },
  {
    userId: 7,
    userFirstName: 'Frank',
    userSurname: 'Ocean',
    userPic: pic1
  }]

storiesOf('Connections', module)
  .add("User Connections", () =>
    <Connections
      to="User/userid/connections"
      userViewing={true}
      users={testUsers}
      extraUsers="See More">
    </Connections>)
  .add("Her Connections", () =>
    <Connections
      to="User/userid/connections"
      userViewing={false}
      users={testUsers.slice(0, 3)}
      extraUsers="See More">
    </Connections>)
  .add("Members", () =>
    <Connections to="User/userid/connections"
      users={testUsers.slice(0, 6)}
      extraUsers="View All"
    />)
