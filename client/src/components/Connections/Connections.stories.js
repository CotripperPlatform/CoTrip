import React from 'react';
import { storiesOf } from '@storybook/react';
import Connections from './Connections';
import pic1 from '../../assets/images/profile-picture-1.png'
import pic2 from '../../assets/images/profile-picture-2.png'
import pic3 from '../../assets/images/profile-picture-3.png'
import pic4 from '../../assets/images/profile-picture-4.png'
import pic5 from '../../assets/images/profile-picture-5.png'

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
    userPic: pic4
  },
  {
    userId: 5,
    userFirstName: 'Freida',
    userSurname: 'Mercury',
    userPic: pic5
  },
  {
    userId: 5,
    userFirstName: 'Leslie',
    userSurname: 'Knope',
    userPic: pic5
  },
  {
    userId: 7,
    userFirstName: 'Frankie',
    userSurname: 'Ocean',
    userPic: pic4
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
