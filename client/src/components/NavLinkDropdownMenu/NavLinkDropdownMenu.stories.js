import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLinkDropdownMenu from './NavLinkDropdownMenu';

const placeholderDropdownProp = [
  {
    text: 'Explore People',
    url: 'community people route'
  },
  {
    text: 'Join Groups',
    url: 'community groups route'
  }
]

storiesOf('NavLinkDropdownMenu', module)
  .add("NavLinkDropdownMenu", () => (
    <NavLinkDropdownMenu menuList={placeholderDropdownProp} />
  )
)
