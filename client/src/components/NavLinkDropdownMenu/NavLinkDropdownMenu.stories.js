import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLinkDropdownMenu from './NavLinkDropdownMenu';

const placeholderDropdownProp = [
  {
    text: 'Explore People',
    url: '/'
  },
  {
    text: 'Join Groups',
    url: '/'
  }
]

storiesOf('NavLinkDropdownMenu', module)
  .add("NavLinkDropdownMenu", () => (
    <NavLinkDropdownMenu menuList={placeholderDropdownProp} />
  )
)
